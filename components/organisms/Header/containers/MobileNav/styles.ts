"use client";

import NextLink from "next/link";
import { linkProps } from "../../styles";
import { styled } from "@/lib/stitches";

export const MobileLink = styled(NextLink, {
  ...linkProps,
  display: "flex",
  fontSize: "$4",
});

export const MobileList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  fontSize: "$3",
  marginLeft: "$4",
  marginTop: "$4",
});

export const MobileListItem = styled(NextLink, {
  ...linkProps,
  display: "flex",
});
