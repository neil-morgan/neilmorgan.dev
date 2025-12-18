import {
  type CssSizeValueType,
  type CssSizeAliasType,
  type CssSizeConfigType,
  type CssSizeType,
  SIZE_ALIAS,
} from "@/app/_styles";
import { isValidCssSizeValue } from "@/app/_utils";

const DEFAULT_SIZE_CONFIG: CssSizeConfigType = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "2.25rem",
  "3xl": "2.5rem",
  "4xl": "2.75rem",
  "5xl": "3rem",
  "6xl": "3.25rem",
} as const;

export const getCssSizeValue = (
  size: CssSizeType,
  config?: CssSizeConfigType
): CssSizeValueType => {
  if (
    !SIZE_ALIAS.includes(size as CssSizeAliasType) &&
    !isValidCssSizeValue(size)
  ) {
    throw new Error(`Invalid size value: ${size}`);
  }
  const sizeAliases = config ?? DEFAULT_SIZE_CONFIG;
  return sizeAliases[size as CssSizeAliasType] ?? (size as CssSizeValueType);
};
