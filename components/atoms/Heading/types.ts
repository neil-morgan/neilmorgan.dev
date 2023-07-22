import type { CSS } from "@stitches/react";

export type HeadingProps = {
  children: React.ReactNode;
  css?: CSS;
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: "print";
};
