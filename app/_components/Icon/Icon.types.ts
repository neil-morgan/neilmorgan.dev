import type {
  CssSizeType,
  ColorShadeType,
  ColorSchemeType,
} from "@/app/_styles";

import { icons } from "./icons";

export type IconNameType = keyof typeof icons;

export type IconPathType = {
  name: IconNameType;
  path: string;
};

export interface IconProps {
  className?: string;
  color?: ColorSchemeType;
  shade?: ColorShadeType;
  name: IconNameType;
  size?: CssSizeType;
  style?: React.CSSProperties;
}

export interface IconStoryParams {
  sizes: CssSizeType[];
  colors: ColorSchemeType[];
}
