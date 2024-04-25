import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "$6",
});

export const Row = styled("div", {
  display: "flex",
  gap: "$3",
  flexWrap: "wrap",
  justifyContent: "flex-start",

  "@md": {
    gap: "$4",
  },
});
