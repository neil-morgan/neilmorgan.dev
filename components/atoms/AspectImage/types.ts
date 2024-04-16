import type { CSS } from "@stitches/react";

export type AspectImageProps = {
  url: string;
  description: string;
  ratio?: number;
  blurDataUrl?: string;
  fit?: "cover" | "contain";
  width?: number;
  css?: CSS;
};
