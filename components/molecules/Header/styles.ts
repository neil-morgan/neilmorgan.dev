import { styled } from "@/lib/stitches";

export const HeaderWrapper = styled("header", {
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 100,
  height: "$7",
  width: "100%",
  marginBottom: "$10",
  backgroundColor: "$baseBackground",
  transition: "$theme",
});

export const HeaderContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
