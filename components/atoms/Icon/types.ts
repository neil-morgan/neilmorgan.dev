import type { CSS } from "@stitches/react";
import type { IconType } from "@/service";

export type IconProps = {
  name: IconType;
  size?: "sm" | "md" | "lg";
  color?: string;
  css?: CSS;
};
