import { styled } from "@/lib/stitches";

export const Svg = styled("svg", {
  display: "block",
  color: "currentColor",
  variants: {
    size: {
      sm: {
        width: "1em",
        height: "1em",
        lineHeight: "1em",
      },
      md: {
        width: "1.2em",
        height: "1.2em",
        lineHeight: "1.2em",
      },
      lg: {
        width: "1.6em",
        height: "1.6em",
        lineHeight: "1.6em",
      },
      xl: {
        width: "2em",
        height: "2em",
        lineHeight: "2em",
      },
    },
  },
});
