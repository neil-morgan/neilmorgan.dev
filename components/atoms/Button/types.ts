import type { CSS } from "@stitches/react";
import type { ColorType, IconType } from "@/service";

export type ButtonProps = {
  children: React.ReactNode;
  css?: CSS;
  href?: string | null;
  onClick?: () => void;
  rightIcon?: IconType;
  leftIcon?: IconType;
  iconColor?: ColorType;
  size?: "sm" | "md" | "lg";
  noHighlight?: boolean;
  asLink?: boolean;
  disabled?: boolean;
};
