"use client";

import { styled } from "@/lib/stitches";

export const SkillsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$11",
});

export const Proficiency = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "$6",
});

export const ProficiencyItems = styled("div", {
  display: "flex",
  gap: "$4",
  flexWrap: "wrap",
  justifyContent: "flex-start",

  "@md": {
    gap: "$6",
  },
});
