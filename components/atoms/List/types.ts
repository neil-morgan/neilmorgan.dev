import type { CSS } from "@stitches/react";
import type { GapType } from "@/service";

export type ListProps = {
  gap?: GapType;
  css?: CSS;
  format?: "bullets" | "numbers";
};
