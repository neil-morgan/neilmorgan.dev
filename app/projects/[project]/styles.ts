"use client";

import { styled } from "@/lib/stitches";

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "$9",
  gap: "$9",

  "@lg": { flexDirection: "row-reverse", gap: "$11" },
});

export const Aside = styled("aside", {
  display: "flex",
  alignItems: "flex-start",
  minWidth: "360px",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "$5",
});

export const AsideStats = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "$4",
});

export const AsideDate = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$4",
});
