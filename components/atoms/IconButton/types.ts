import type { CSS } from "@stitches/react";

export type IconButtonProps = {
  css?: CSS;
  target?: string;
  href?: string | null;
  isExternal?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  priority?: "primary" | "secondary" | "nav";
  size?: "sm" | "md" | "lg";
} & ({ children?: never } | { icon?: never; children?: React.ReactNode });

export type IconButtonRef =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;
