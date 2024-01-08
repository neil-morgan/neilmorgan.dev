import { styled } from "@/lib/stitches";

export const CardWrapper = styled("a", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "$md",
  background: "transparent",
  padding: "$4",
  transition: "250ms ease",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$border",
  position: "relative",

  "&:hover": {
    borderColor: "$borderHover",
    background: "rgba(255,255,255,0.04)",
  },
});
