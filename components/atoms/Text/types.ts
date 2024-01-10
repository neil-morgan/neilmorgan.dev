import type { CSS } from "@stitches/react";

export type TextProps = {
  css?: CSS;
  id?: string;
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
  size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: "italic" | "normal";
  print?: boolean;
  color?:
    | "$white"
    | "$black"
    | "$base1"
    | "$base2"
    | "$base3"
    | "$base4"
    | "$base5"
    | "$base6"
    | "$base7"
    | "$base8"
    | "$base9"
    | "$base10"
    | "$base11"
    | "$base12"
    | "$base13"
    | "$base14"
    | "$text";
};
