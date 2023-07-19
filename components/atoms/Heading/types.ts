import type { ReactNode } from "react";
import type { CSS } from "@stitches/react";

export type HeadingProps = {
  children: ReactNode;
  css?: CSS;
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  anchorSize?: "sm" | "md" | "lg";
};
