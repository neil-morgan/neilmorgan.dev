"use client";

import { styled } from "@/lib/stitches";

export const Blockquote = styled("blockquote", {
  display: "flex",
  background: "$layer3",
  padding: "$5",
  color: "$bodyText",
  borderLeft: "solid 4px $primary1",

  "@lg":{
    padding: "$7",
  }
});
