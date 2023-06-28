import { createTheme, createStitches, globalCss } from "@stitches/react";
import { gray, blueDark, grayDark } from "@radix-ui/colors";
import { MarginProperty, PaddingProperty } from "./types";

export const lightTheme = createTheme({
  colors: {
    baseText: gray.gray12,
    baseBackground: gray.gray6,
    navItem: grayDark.gray8,
    navItemHovered: grayDark.gray1,
  },
});

export const darkTheme = createTheme({
  colors: {
    baseText: gray.gray1,
    baseBackground: blueDark.blue1,
    navItem: gray.gray7,
    navItemHovered: gray.gray1,
  },
});

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",
    backgroundColor: "$baseBackground",
    color: "$baseText",
    transition: "ease-in-out 250ms",
  },

  "*, *::before, *::after": { boxSizing: "inherit" },

  body: {
    margin: 0,
    padding: 0,
  },
});

export const { styled } = createStitches({
  theme: {
    space: {
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
      11: "8rem", // 128px
      12: "16rem", // 256px
      13: "32rem", // 512px
    },
    fontSizes: {
      body: "1rem",
      0: "0.625rem", // 10px
      1: "0.75rem", // 12px
      2: "0.875rem", // 14px
      3: "1rem", // 16px - body, h5, h4
      4: "1.125rem", // 18px
      5: "1.25rem", // 20px
      6: "1.375rem", // 22px
      7: "1.5625rem", // 25px - h3
      8: "1.75rem", // 28px
      9: "2rem", // 32px - h2
      10: "2.25rem", // 36px
      11: "2.625rem", // 42px - h1
      12: "2.875rem", // 46px
      13: "3.1875rem", // 51px
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
  },
  media: {
    sm: "(min-width: 30em)",
    md: "(min-width: 48em)",
    lg: "(min-width: 62em)",
    xl: "(min-width: 80em)",
    "2xl": "(min-width: 96em)",
  },
  utils: {
    m: () => (value: MarginProperty) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: () => (value: MarginProperty) => ({
      marginLeft: value,
      marginRight: value,
    }),
    ml: () => (value: MarginProperty) => ({
      marginLeft: value,
    }),
    mr: () => (value: MarginProperty) => ({
      marginRight: value,
    }),
    my: () => (value: MarginProperty) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: () => (value: MarginProperty) => ({
      marginTop: value,
    }),
    mb: () => (value: MarginProperty) => ({
      marginBottom: value,
    }),
    p: () => (value: PaddingProperty) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    px: () => (value: PaddingProperty) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pl: () => (value: PaddingProperty) => ({
      paddingLeft: value,
    }),
    pr: () => (value: PaddingProperty) => ({
      paddingRight: value,
    }),
    py: () => (value: PaddingProperty) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: () => (value: PaddingProperty) => ({
      paddingTop: value,
    }),
    pb: () => (value: PaddingProperty) => ({
      paddingBottom: value,
    }),
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
