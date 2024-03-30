import { createStitches, globalCss } from "@stitches/react";
import { tealDark } from "@radix-ui/colors";
import { BREAKPOINTS } from "@/lib/site";
import type { CorrectedColorType } from "@/service";

export const globalStyles = globalCss({
  html: {
    height: "100%",
    boxSizing: "border-box",
    transition: "$theme",
    scrollBehavior: "smooth",
    overscrollBehaviorY: "none",
    fontFamily: "var(--font-inter)",
  },
  body: {
    height: "100%",
    overscrollBehaviorY: "none",
    backgroundColor: "$layer1",
    color: "$text",
  },
  a: { textDecoration: "none", color: "unset" },
  "*, *::before, *::after": { boxSizing: "inherit", margin: 0, padding: 0 },
});

export const colors: { [K in CorrectedColorType]: string } = {
  white: "#ffffff",
  black: "#000000",
  layer1: "#0D141F",
  layer2: "#111A27",
  layer3: "#182434",
  primary1: tealDark.teal11,
  primary2: `${tealDark.teal8}50`,
  secondary1: "#9EB1FF",
  secondary2: "#435DB150",
  text: "#ffffffbf",
  border: "rgba(255,255,255,0.1)",
  borderHover: "rgba(255,255,255,0.25)",
  highlightHover: "rgba(255,255,255,0.04)",
};

export const space = {
  0: "0rem", // 0px
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.5rem", // 24px
  6: "2rem", // 32px
  7: "2.5rem", // 40px
  8: "3rem", // 48px
  9: "3.5rem", // 56px
  10: "4rem", // 64px
  11: "6rem", // 96px
  12: "8rem", // 128px
  13: "16rem", // 256px
  14: "24rem", // 384px
  15: "32rem", // 512px
};

export const { styled } = createStitches({
  theme: {
    colors,
    space,

    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
      10: "100px",
    },

    fontSizes: {
      0: "0.75rem", // 12px
      1: "0.875rem", // 14px
      2: "1rem", // 16px
      3: "1.125rem", // 18px
      4: "1.25rem", // 20px
      5: "1.5rem", // 24px
      6: "2rem", // 32px
      7: "2.5rem", // 40px
      8: "3.125rem", // 50px
      9: "4rem", // 64px
      10: "6rem", // 96px
    },

    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },

    borderWidths: {
      sm: "0.25rem", // 4px
      md: "0.5rem", // 8px
      lg: "0.75rem", // 12px
    },

    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      body: "1.625",
      heading: 1.15,
    },

    shadows: {
      default:
        "0 1px 1px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.10), 0 4px 4px rgba(0,0,0,0.10), 0 8px 8px rgba(0,0,0,0.10)",
    },

    transitions: {
      theme: "ease-in-out 250ms",
    },

    radii: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.4rem",
      lg: "0.625rem",
      xl: "1rem",
      full: "9999px",
      round: "50%",
      pill: "9999px",
    },

    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },

  media: {
    sm: `(min-width: ${BREAKPOINTS.sm})`,
    md: `(min-width: ${BREAKPOINTS.md})`,
    lg: `(min-width:${BREAKPOINTS.lg})`,
    xl: `(min-width:${BREAKPOINTS.xl})`,
    "2xl": `(min-width: ${BREAKPOINTS["2xl"]})`,
  },
});
