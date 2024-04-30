"use client";

import { styled } from "@/lib/stitches";

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "$9",
  gap: "$8",
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
  alignItems: "flex-start",
  minWidth: "360px",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "$5",

  "@md": { flexDirection: "row", justifyContent: "space-between" },

  "@lg": {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export const AsideStats = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$4",
});

export const Introduction = styled("div", {
  display: "flex",
  gap: "$8",
  flexDirection: "column-reverse",

  "@lg": {
    gap: "$10",
    flexDirection: "row",
  },
});
