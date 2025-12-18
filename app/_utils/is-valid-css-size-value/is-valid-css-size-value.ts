import {
  CSS_UNITS,
  type CssSizeValueType,
  type CssUnitType,
} from "@/app/_styles";

/**
 * Checks if a string is a valid CSS value (e.g., "1rem", "20px", "2em")
 */
export const isValidCssSizeValue = (
  value: string
): value is CssSizeValueType => {
  const match = value.match(/([\d.-]+)([a-zA-Z%]+)/);
  return Boolean(match && CSS_UNITS.includes(match[2] as CssUnitType));
};
