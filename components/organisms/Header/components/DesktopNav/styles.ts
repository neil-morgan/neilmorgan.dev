"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("nav", {
  display: "none",
  alignItems: "center",
  gridTemplateColumns: "repeat(5, 1fr)",

  "@lg": {
    display: "flex",
  },
});

export const List = styled("ul", {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  marginLeft: "$4",
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
