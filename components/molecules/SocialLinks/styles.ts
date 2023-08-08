"use client";

import NextLink from "next/link";
import { styled } from "@/lib/stitches";

export const SocialLinksWrapper = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "140px",
  justifyContent: "space-between",
});

export const SocialLink = styled(NextLink, {
  color: "$navItem",
  transition: "$theme",
  "&:hover": { color: "$navItemHover" },
  "&:focus": { color: "$navItemHover" },
});
