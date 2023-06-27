import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",
    backgroundColor: "$loContrast",
    color: "$hiContrast",
  },

  "*, *::before, *::after": { boxSizing: "inherit" },

  body: {
    margin: 0,
    padding: 0,
  },
});
