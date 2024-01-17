import type { CSS } from "@stitches/react";
import type { ColorType } from "@/types";

export type TextProps = {
  css?: CSS;
  id?: string;
  isInViewport?: (id: string) => void;
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "div"
    | "strong"
    | "span";
  textAlign?: "left" | "center" | "right" | "justify";
  size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: "italic" | "normal";
  print?: boolean;
  color?: ColorType;
};
