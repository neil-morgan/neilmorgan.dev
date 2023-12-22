import { styled } from "@/lib/stitches";

export const CardWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "$md",
  position: "relative",
  backgroundColor: "$backgroundFar",
  transition: "background-color $theme",
});

export const CardBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "$5",
});
