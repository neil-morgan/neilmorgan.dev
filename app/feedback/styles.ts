"use client";

import { styled } from "@/lib/stitches";

export const FeedbackItem = styled("div", {
  display: "grid",
  flexDirection: "column",
  gap: "$4",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$border",
  borderRadius: "$md",
  padding: "$4",
});
