import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "$7",
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridColumnGap: "$6",
  gridRowGap: "$9",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
