import { CSS_UNITS, SIZE_ALIAS, HEADING_ELEMENTS } from "./constants";

export type ColorSchemeType = "electric-blue" | "orange" | "liquorice";
export type ColorShadeType =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type CssUnitType = (typeof CSS_UNITS)[number];
export type CssSizeAliasType = (typeof SIZE_ALIAS)[number];
export type CssHeadingElementType = (typeof HEADING_ELEMENTS)[number];
export type CssSizeValueType = `${number}${CssUnitType}`;
export type CssSizeType = CssSizeValueType | CssSizeAliasType;
export type CssSizeConfigType = {
  xs?: CssSizeValueType;
  sm?: CssSizeValueType;
  md?: CssSizeValueType;
  lg?: CssSizeValueType;
  xl?: CssSizeValueType;
  "2xl"?: CssSizeValueType;
  "3xl"?: CssSizeValueType;
  "4xl"?: CssSizeValueType;
  "5xl"?: CssSizeValueType;
  "6xl"?: CssSizeValueType;
};
