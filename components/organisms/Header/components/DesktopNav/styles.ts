"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("nav", {
  display: "none",
  alignItems: "center",
  gridTemplateColumns: "repeat(5, 1fr)",

  "@md": {
    display: "grid",
  },
});

export const List = styled("ul", {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  gridColumn: "2 / 5",
  gap: "$4",
});

export const Item = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const SocialItems = styled("ul", {
  display: "flex",
  justifyContent: "center",
  gap: "$4",
  marginLeft: "auto",
});
