import { styled } from "@/lib/stitches";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const HeaderActions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
});
