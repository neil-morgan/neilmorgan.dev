import { createStitches, createTheme } from "@stitches/react";

export const darkTheme = createTheme({
  colors: {
    hiContrast: "white",
    loContrast: "black",
  },
});

export const lightTheme = createTheme({
  colors: {
    hiContrast: "black",
    loContrast: "white",
  },
});

export const { styled, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      default: "BlinkMacSystemFont",
    },
    fontSizes: {
      small: 24,
      large: 24,
    },
  },
});
