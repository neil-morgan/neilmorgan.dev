import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",
    backgroundColor: "$base",
    color: "$text",
    transition: "ease-in-out 250ms",
  },

  "*, *::before, *::after": { boxSizing: "inherit" },

  body: {
    margin: 0,
    padding: 0,
  },
});
