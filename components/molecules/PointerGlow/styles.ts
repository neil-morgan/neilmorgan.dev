import { styled } from "@/lib/stitches";

export const GlowElement = styled("div", {
  display: "none",
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,

  "@md": {
    display: "block",
  },
});
