import type { CssSizeValueType } from "@/app/_styles";

export type AspectImageProps = {
  blurDataUrl?: string;
  borderRadius?: CssSizeValueType;
  className?: string;
  description: string;
  /** Raw CMS JSON containing nested focalPoint pixel coordinates. */
  focalPoint?: unknown;
  /** Original asset dimensions, required when a focal point is provided. */
  sourceSize?: {
    width: number | null;
    height: number | null;
  };
  fit?: "cover" | "contain";
  ratio?: number;
  style?: React.CSSProperties;
  url: string;
  scale?: "up" | "down";
  loading?: "lazy" | "eager";
  size?: CssSizeValueType;
  sizes?: string;
  shadow?: boolean;
  href?: string;
};
