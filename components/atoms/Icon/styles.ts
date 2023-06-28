import { styled } from "@/lib/stitches";

export const Svg = styled("svg", {
  display: "block",
  color: "currentColor",
  variants: {
    size: {
      sm: {
        width: "16px",
        height: "16px",
        lineHeight: "16px",
      },
      md: {
        width: "24px",
        height: "24px",
        lineHeight: "24px",
      },
      lg: {
        width: "32px",
        height: "32px",
        lineHeight: "32px",
      },
    },
  },
});
