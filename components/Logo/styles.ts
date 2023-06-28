import { styled } from "@stitches/react";

export const Svg = styled("svg", {
  color: "$navItem",
  "&:hover": {
    color: "$navItemHovered",
  },
  transition: "ease all 200ms",
  height: "100%",
  width: "100%",
});
