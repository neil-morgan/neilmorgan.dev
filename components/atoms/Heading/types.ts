import type { ReactNode } from "react";
import type { CSS } from "@stitches/react";

export type HeadingProps = {
  children: ReactNode;
  css?: CSS;
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "primary" | "secondary" | "tertiary";
  anchorSize?: "sm" | "md" | "lg";
};
