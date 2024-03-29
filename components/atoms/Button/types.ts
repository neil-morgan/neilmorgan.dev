import type { CSS } from "@stitches/react";
import type { ColorType } from "@/service";

export type ButtonProps = {
  children: React.ReactNode;
  css?: CSS;
  href?: string | null;
  isExternal?: boolean;
  onClick?: () => void;
  rightIcon?: string;
  leftIcon?: string;
  iconColor?: ColorType;
  size?: "sm" | "md" | "lg";
  noHighlight?: boolean;
  asLink?: boolean;
};
