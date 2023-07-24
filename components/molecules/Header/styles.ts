import { styled } from "@/lib/stitches";

export const HeaderElement = styled("header", {
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 100,
  height: "$7",
  width: "100%",
  marginBottom: "$10",
  backgroundColor: "$backgroundFar",
  transition: "$theme",
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
