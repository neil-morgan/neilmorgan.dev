import { createTheme, createStitches, globalCss } from "@stitches/react";
import {
  slate,
  slateDark,
  violet,
  violetA,
  yellow,
  yellowA,
} from "@radix-ui/colors";

import { getColorValues } from "./helpers";

const themeBase = getColorValues(slate, "base");
const themeBaseD = getColorValues(slateDark, "baseD");
const themePrimary = getColorValues(violet, "primary");
const themePrimaryA = getColorValues(violetA, "primaryA");
const themeSecondary = getColorValues(yellow, "secondary");
const themeSecondaryA = getColorValues(yellowA, "secondaryA");

const base = Object.values(themeBase);
const baseD = Object.values(themeBaseD);
const primary = Object.values(themePrimary);
const primaryA = Object.values(themePrimaryA);
const secondary = Object.values(themeSecondary);
const secondaryA = Object.values(themeSecondaryA);

export const lightTheme = createTheme({
  colors: {
    buttonPrimaryColor: base[1],
    buttonPrimaryBackground: primary[9],
    buttonPrimaryBackgroundHover: primary[10],

    buttonSecondaryColor: secondary[10],
    buttonSecondaryBackground: secondaryA[4],
    buttonSecondaryBackgroundHover: secondaryA[5],

    backgroundFar: base[0],
    backgroundClose: base[2],

    textBase: baseD[3],
    textLink: primary[10],

    navItem: baseD[8],
    navItemHover: baseD[1],

    divider: base[7],
  },
});

export const darkTheme = createTheme({
  colors: {
    buttonPrimaryColor: primary[11],
    buttonPrimaryBackground: primary[7],
    buttonPrimaryBackgroundHover: primary[1],

    buttonSecondaryColor: secondary[5],
    buttonSecondaryBackground: secondaryA[3],
    buttonSecondaryBackgroundHover: secondaryA[4],

    backgroundFar: slateDark.slate1,
    backgroundClose: slateDark.slate3,

    textBase: base[3],
    textLink: primary[7],

    navItem: base[7],
    navItemHover: base[1],

    divider: baseD[6],
  },
});

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",
    backgroundColor: "$backgroundFar",
    color: "$textBase",
    transition: "$theme",
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
  "*, *::before, *::after": { boxSizing: "inherit", margin: 0, padding: 0 },
});

export const { styled } = createStitches({
  theme: {
    colors: { ...themeBase, ...themeBaseD, ...themePrimary, ...themePrimaryA },

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
