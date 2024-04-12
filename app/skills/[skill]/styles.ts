"use client";

import { styled } from "@/lib/stitches";

export const Content = styled("div", {
  display: "flex",
});

export const Body = styled("article", {
  display: "flex",
  flexDirection: "column",
});

export const Aside = styled("aside", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minWidth: "360px",
  width: "100%",
  gap: "$4",
});
