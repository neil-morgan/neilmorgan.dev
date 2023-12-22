import { styled } from "@/lib/stitches";

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const ActionsWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
