import type { CSS } from "@stitches/react";

export type AspectRatioProps = {
  children: React.ReactNode;
  ratio?: number;
  css?: CSS;
  rounded?: boolean;
};
