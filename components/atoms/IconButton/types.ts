import type { CSS } from "@stitches/react";
import type { MouseEvent } from "react";

export type IconButtonProps = {
  css?: CSS;
  target?: string;
  href?: string | null;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  noHighlight?: boolean;
} & ({ children?: never } | { icon?: never; children?: React.ReactNode });
