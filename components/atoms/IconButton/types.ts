import type { CSS } from "@stitches/react";

export type IconButtonProps = {
  css?: CSS;
  href?: string | null;
  isExternal?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  priority?: "primary" | "secondary" | "nav";
  size?: "sm" | "md" | "lg";
} & ({ children?: never } | { icon?: never; children?: React.ReactNode });
