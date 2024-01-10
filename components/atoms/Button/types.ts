import type { CSS } from "@stitches/react";

export type ButtonProps = {
  children: React.ReactNode;
  css?: CSS;
  href?: string | null;
  isExternal?: boolean;
  onClick?: () => void;
  rightIcon?: string;
  leftIcon?: string;
  size?: "sm" | "md" | "lg";
  forceHoverState?: boolean;
  priority?: "default" | "primary" | "contrast";
  noHighlight?: boolean;
  asLink?: boolean;
};
