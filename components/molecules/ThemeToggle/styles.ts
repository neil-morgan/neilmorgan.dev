import { styled } from "@/lib/stitches";

export const ToggleButton = styled("button", {
  height: "20px",
  width: "20px",
  padding: 0,
  border: 0,
  background: "transparent",
  cursor: "pointer",
  borderRadius: "2px",
});

export const Svg = styled("svg", {
  color: "$navItem",
  "&:hover": {
    color: "$navItemHover",
  },
  transition: "ease all 200ms",
  height: "100%",
  width: "100%",
});
