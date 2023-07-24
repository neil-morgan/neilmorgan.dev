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
        width: "1.4em",
        height: "1.4em",
        lineHeight: "1.4em",
      },
    },
  },
});
