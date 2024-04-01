import type { CSS } from "@stitches/react";
import type { GapOptionsType } from "@/service";

export type ListProps = {
  gap?: GapOptionsType;
  css?: CSS;
  format?: "bullets" | "numbers";
};
