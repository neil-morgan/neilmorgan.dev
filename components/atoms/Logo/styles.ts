import { styled } from "@/lib/stitches";

export const Svg = styled("svg", {
  color: "$navItem",
  "&:hover": {
    color: "$navItemHover",
  },
  transition: "ease all 200ms",
  height: "100%",
  width: "100%",
});
