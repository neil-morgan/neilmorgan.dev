import type { CssSizeType } from "@/app/_styles";

export interface SpinnerProps {
  className?: string;
  size?: CssSizeType;
  style?: React.CSSProperties;
}

export interface SpinnerStoryParams {
  sizes: CssSizeType[];
}
