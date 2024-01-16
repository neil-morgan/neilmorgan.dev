"use client";

import { styled } from "@/lib/stitches";

export const SecondaryItemsWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$4",
  "@md": {
    marginLeft: "auto",
  },
});
