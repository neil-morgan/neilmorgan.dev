import { styled } from "@/lib/stitches";

export const Category = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "$10",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
});

export const Grid = styled("div", {
  display: "grid",
  marginTop: "$5",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: "$6",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "$7",
  },
});
