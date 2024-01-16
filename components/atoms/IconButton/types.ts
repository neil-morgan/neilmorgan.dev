import type { CSS } from "@stitches/react";

export type IconButtonProps = {
  css?: CSS;
  target?: string;
  href?: string | null;
  isExternal?: boolean;
  onClick?: () => void;
  icon?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  noHighlight?: boolean;
} & ({ children?: never } | { icon?: never; children?: React.ReactNode });
