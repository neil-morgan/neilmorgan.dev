"use client";

import { styled } from "@/lib/stitches";

export const FeedbackHeader = styled("header", {
  display: "flex",
  gap: "$4",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const FeedbackAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const FeedbackAuthorImage = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$layer3",
  height: "$8",
  width: "$8",
  borderRadius: "100%",
  position: "relative",
  color: "$secondary1",
  overflow: "hidden",
});
