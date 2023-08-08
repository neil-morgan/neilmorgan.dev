import Link from "next/link";
import { styled } from "@/lib/stitches";

export const WrapperLink = styled(Link, {
  display: "flex",
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
