"use client";

import { styled } from "@/lib/stitches";

export const PageWrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
});

export const Main = styled("main", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

export const IntroWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "",
  "@md": {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export const IntroDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "100%",
  width: "100%",
  textAlign: "center",
  marginBottom: "$9",
  marginTop: 0,

  "@md": {
    maxWidth: "600px",
    marginTop: "$11",
    textAlign: "left",
    alignItems: "flex-start",
  },

  "@lg": {
    marginBottom: 0,
  },
});

export const SellingPointsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  margin: "$10 0",
  gap: "$8",

  "@md": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "$10",
  },
});

export const SellingPoint = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
