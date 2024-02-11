import type { CSS } from "@stitches/react";
import type { GapType } from "@/types";

export type ListProps = {
  gap?: GapType;
  css?: CSS;
  format?: "bullets" | "numbers";
};
