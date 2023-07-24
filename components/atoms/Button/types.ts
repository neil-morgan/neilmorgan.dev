import type { CSS } from "@stitches/react";

export type ButtonProps = {
  children: React.ReactNode;
  css?: CSS;
  href?: string | null;
  isExternal?: boolean;
  onClick?: () => void;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};
