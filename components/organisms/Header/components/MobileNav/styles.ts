"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("nav", {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(2, 1fr)",

  "@md": {
    display: "none",
  },
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});

export const Options = styled("li", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  fontSize: "$3",
  marginLeft: "$2",
  marginTop: "$2",
});

export const Footer = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  gap: "$4",
  width: "100%",
  marginTop: "$5",
});
