import { createTheme, createStitches, globalCss } from "@stitches/react";
import { gray, slateDark, grayDark, violet, blue } from "@radix-ui/colors";

export const lightTheme = createTheme({
  colors: {
    primary: violet.violet11,
    baseText: slateDark.slate3,
    baseBackground: gray.gray1,
    closeBackground: gray.gray3,
    link: blue.blue10,
    navItem: grayDark.gray8,
    navItemHovered: grayDark.gray1,
    divider: gray.gray7,
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: violet.violet8,
    baseText: gray.gray6,
    baseBackground: slateDark.slate1,
    closeBackground: slateDark.slate2,
    link: blue.blue8,
    navItem: gray.gray7,
    navItemHovered: gray.gray1,
    divider: slateDark.slate6,
  },
});

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",
    backgroundColor: "$baseBackground",
    color: "$baseText",
    transition: "$theme",
    scrollBehavior: "smooth",
  },

  "*, *::before, *::after": { boxSizing: "inherit", margin: 0, padding: 0 },
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
      11: "6rem", // 96px
      12: "8rem", // 128px
      13: "16rem", // 256px
      14: "24rem", // 384px
      15: "32rem", // 512px
    },
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
      0: "0.625rem", // 10px
      1: "0.75rem", // 12px
      2: "0.875rem", // 14px
      3: "1rem", // 16px
      4: "1.125rem", // 18px
      5: "1.25rem", // 20px
      6: "1.375rem", // 22px
      7: "1.5625rem", // 25px
      8: "1.75rem", // 28px
      9: "2rem", // 32px - h2
      10: "2.25rem", // 36px
      11: "2.625rem", // 42px
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
    sm: "(min-width: 30em)",
    md: "(min-width: 48em)",
    lg: "(min-width: 62em)",
    xl: "(min-width: 80em)",
    "2xl": "(min-width: 96em)",
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
