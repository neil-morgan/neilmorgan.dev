"use client";

import { styled } from "@/lib/stitches";

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "$8",
  gap: "$11",
  "@lg": {
    flexDirection: "row",
  },
});

export const Body = styled("article", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "700px",
  width: "100%",
  gap: "$8",
});

export const Aside = styled("aside", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minWidth: "360px",
  gap: "$6",
});

export const Actions = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});
