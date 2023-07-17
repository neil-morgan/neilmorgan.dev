import { styled } from "@/lib/stitches";

export const HeaderWrapper = styled("header", {
  position: "fixed",
  zIndex: 100,
  display: "flex",
  height: "50px",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
  backgroundColor: "$baseBackground",
  transition: "$theme",
});
