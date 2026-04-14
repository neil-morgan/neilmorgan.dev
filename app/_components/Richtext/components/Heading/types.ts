import type { CSS } from "@stitches/react";

export type HeadingProps = {
  css?: CSS;
  id: string;
  isInViewport?: (id: string) => void;
  as?: "h2" | "h3";
  size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};
