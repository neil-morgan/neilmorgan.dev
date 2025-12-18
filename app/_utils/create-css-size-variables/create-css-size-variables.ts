import { type CssSizeConfigType, type CssSizeType } from "@/app/_styles";
import { getCssValueAndFormat, getCssSizeValue } from "@/app/_utils";

export const createCssSizeVariables = (
  size: CssSizeType,
  sizesConfig: CssSizeConfigType,
  flag = "--size"
) => {
  const { value, format } = getCssValueAndFormat(
    getCssSizeValue(size, sizesConfig)
  );

  return {
    [flag]: `${value}${format}`,
  } as React.CSSProperties;
};
