import type { CssSizeValueType } from "@/app/_styles";

export type AspectImageProps = {
  blurDataUrl?: string;
  borderRadius?: CssSizeValueType;
  className?: string;
  description: string;
  fit?: "cover" | "contain";
  ratio?: number;
  style?: React.CSSProperties;
  url: string;
  width?: number;
};
