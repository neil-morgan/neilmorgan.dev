import type { CSS } from "@stitches/react";

export type TextProps = {
  children: React.ReactNode;
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  css?: CSS;
};
