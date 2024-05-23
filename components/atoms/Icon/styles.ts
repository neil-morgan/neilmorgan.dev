import { styled } from "@/lib/stitches";

export const Svg = styled("svg", {
  display: "block",
  color: "currentColor",
  variants: {
    size: {
      sm: {
        width: "1rem",
        height: "1rem",
        lineHeight: "1rem",
      },
      md: {
        width: "1.2rem",
        height: "1.2rem",
        lineHeight: "1.2rem",
      },
      lg: {
        width: "1.6rem",
        height: "1.6rem",
        lineHeight: "1.6rem",
      },
      xl: {
        width: "2rem",
        height: "2rem",
        lineHeight: "2rem",
      },
    },
  },
});
