import {
  type CssSizeValueType,
  type CssUnitType,
  CSS_UNITS,
} from "@/app/_styles";

export const getCssValueAndFormat = (value: CssSizeValueType) => {
  const match = value.match(/([\d.-]+)([a-zA-Z%]+)/);
  if (!match || !CSS_UNITS.includes(match[2] as CssUnitType)) {
    throw new Error(`Invalid CSS value format: ${value}`);
  }
  const num = parseFloat(match[1]);
  const unit = match[2];
  return {
    value: num,
    format: unit,
  };
};
