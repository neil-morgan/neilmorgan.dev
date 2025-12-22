import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parsePaletteFromTS(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const palettes = {};

  // Match each export const declaration with numeric keys
  const exportRegex = /export const (\w+) = \{([^}]+)\};/gs;
  let match;

  while ((match = exportRegex.exec(content)) !== null) {
    const paletteName = match[1];
    const paletteContent = match[2];

    // Parse the color entries (numeric keys or string keys)
    const colorRegex = /(\d+|"[^"]+"|'[^']+'|\w+):\s*["']([^"']+)["']/g;
    const colors = {};
    let colorMatch;

    while ((colorMatch = colorRegex.exec(paletteContent)) !== null) {
      const key = colorMatch[1].replace(/['"]/g, ""); // Remove quotes if present
      colors[key] = colorMatch[2];
    }

    palettes[paletteName] = colors;
  }

  return palettes;
}

function parseStylesFromTS(filePath, palettePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // First, load the palette
  const paletteData = parsePaletteFromTS(palettePath);

  // Match all const declarations (colors, spacing, etc.)
  const constRegex = /const (\w+) = \{/g;
  const allStyles = {};
  let match;

  while ((match = constRegex.exec(content)) !== null) {
    const constName = match[1];
    const startIdx = content.indexOf("{", match.index);

    // Find the matching closing brace
    let braceCount = 0;
    let endIdx = startIdx;
    for (let i = startIdx; i < content.length; i++) {
      if (content[i] === "{") braceCount++;
      if (content[i] === "}") braceCount--;
      if (braceCount === 0) {
        endIdx = i;
        break;
      }
    }

    const objectContent = content.substring(startIdx + 1, endIdx);
    const styles = {};

    // Parse entries - format: propertyName: palette[number] or propertyName: "#hex" or `${palette[number]}alpha` or propertyName: "string"
    const entryRegex =
      /(\w+):\s*(?:["']([^"']+)["']|`\$\{(\w+)\[(\d+)\]\}([^`]*)[\`]|(\w+)\[(\d+)\])/g;
    let entryMatch;

    while ((entryMatch = entryRegex.exec(objectContent)) !== null) {
      const propertyName = entryMatch[1];

      if (entryMatch[2]) {
        // Direct string value (hex, rem, px, etc.)
        styles[propertyName] = entryMatch[2];
      } else if (entryMatch[3] && entryMatch[4]) {
        // Template literal with alpha: `${palette[number]}alpha`
        const refPalette = entryMatch[3];
        const refKey = entryMatch[4];
        const alpha = entryMatch[5] || "";

        if (paletteData[refPalette] && paletteData[refPalette][refKey]) {
          styles[propertyName] = paletteData[refPalette][refKey] + alpha;
        } else {
          console.warn(`Warning: Could not resolve ${refPalette}[${refKey}]`);
        }
      } else if (entryMatch[6] && entryMatch[7]) {
        // Palette reference like teal[1]
        const refPalette = entryMatch[6];
        const refKey = entryMatch[7];

        if (paletteData[refPalette] && paletteData[refPalette][refKey]) {
          styles[propertyName] = paletteData[refPalette][refKey];
        } else {
          console.warn(`Warning: Could not resolve ${refPalette}[${refKey}]`);
        }
      }
    }

    // Merge styles from each const into allStyles
    Object.assign(allStyles, styles);
  }

  return allStyles;
}

function generateStylesCSS() {
  let cssContent = ":root {\n";

  // Read and parse styles.ts and palette.ts
  const stylesPath = path.join(__dirname, "../app/_styles/styles.ts");
  const palettePath = path.join(__dirname, "../app/_styles/palette.ts");
  const styles = parseStylesFromTS(stylesPath, palettePath);

  // Sort styles alphabetically for consistent output
  const sortedStyles = Object.entries(styles).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  // Add each style variable
  sortedStyles.forEach(([styleKey, styleValue]) => {
    // Convert camelCase property names to kebab-case
    const kebabCaseName = styleKey.replace(/([A-Z])/g, "-$1").toLowerCase();
    const varName = `--${kebabCaseName}`;
    cssContent += `  ${varName}: ${styleValue};\n`;
  });

  cssContent += "}\n";

  return cssContent;
}

function generate() {
  try {
    const cssContent = generateStylesCSS();
    const outputPath = path.join(__dirname, "../app/_styles/styles.css");
    fs.writeFileSync(outputPath, cssContent, "utf-8");

    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ✅ Generated styles.css successfully!`);
  } catch (error) {
    console.error("❌ Error generating styles.css:", error.message);
  }
}

// Check if watch mode is enabled
const watchMode =
  process.argv.includes("--watch") || process.argv.includes("-w");

if (watchMode) {
  console.log("👀 Watching for changes to styles.ts and palette.ts...\n");

  // Generate initially
  generate();

  // Watch for changes
  const stylesPath = path.join(__dirname, "../app/_styles/styles.ts");
  const palettePath = path.join(__dirname, "../app/_styles/palette.ts");

  // Debounce timers to prevent multiple rapid regenerations
  let stylesTimeout;
  let paletteTimeout;

  fs.watch(stylesPath, (eventType) => {
    if (eventType === "change") {
      clearTimeout(stylesTimeout);
      stylesTimeout = setTimeout(() => {
        console.log("📝 styles.ts changed, regenerating...");
        generate();
      }, 100);
    }
  });

  fs.watch(palettePath, (eventType) => {
    if (eventType === "change") {
      clearTimeout(paletteTimeout);
      paletteTimeout = setTimeout(() => {
        console.log("🎨 palette.ts changed, regenerating...");
        generate();
      }, 100);
    }
  });

  console.log("\nPress Ctrl+C to stop watching.\n");
} else {
  // Single run
  generate();
}
