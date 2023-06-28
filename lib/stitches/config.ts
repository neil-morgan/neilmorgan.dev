import { createTheme, createStitches } from "@stitches/react";
import { gray, blueDark, grayDark } from "@radix-ui/colors";

export const lightTheme = createTheme({
  colors: {
    text: gray.gray12,
    base: gray.gray6,
    navItem: grayDark.gray8,
    navItemHovered: grayDark.gray1,
  },
});

export const darkTheme = createTheme({
  colors: {
    text: gray.gray1,
    base: blueDark.blue1,
    navItem: gray.gray7,
    navItemHovered: gray.gray1,
  },
});

export const { styled, css } = createStitches({
  theme: {
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
  },
});

// fontWeights: {},
// lineHeights: {},
// letterSpacings: {},
// sizes: {},
// borderWidths: {},
// borderStyles: {},
// radii: {},
// shadows: {},
// zIndices: {},
// transitions: {},
