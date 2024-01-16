import type { CSS } from "@stitches/react";
import type { GapType } from "@/types";

export type ListProps = {
  format?: "numbers" | "bullets";
  css?: CSS;
  gap?: GapType;
};
