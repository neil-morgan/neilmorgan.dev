import type { CSS } from "@stitches/react";

export type MasonryGridProps = {
  gutter: number;
  css?: CSS;
  responsive?: { [bp: number]: number };
};
