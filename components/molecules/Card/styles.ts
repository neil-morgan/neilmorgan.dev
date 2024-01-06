import { styled, primary } from "@/lib/stitches";

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
  borderColor: "rgba(255,255,255,0.05)",
  position: "relative",

  "&:hover": {
    borderColor: "rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.04)",
  },
});
