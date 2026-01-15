import type {
  CssSizeType,
  ColorSchemeType,
  ColorShadeType,
} from "@/app/_styles";

export interface SpinnerProps {
  className?: string;
  color?: ColorSchemeType;
  shade?: ColorShadeType;
  size?: CssSizeType;
  style?: React.CSSProperties;
}

export interface SpinnerStoryParams {
  sizes: CssSizeType[];
  colors: ColorSchemeType[];
}
