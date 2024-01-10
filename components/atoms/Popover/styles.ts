"use client";

import { keyframes } from "@stitches/react";
import { Content, Arrow } from "@radix-ui/react-popover";
import { styled } from "@/lib/stitches";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const PopoverArrow = styled(Arrow, {
  fill: "$layer5",
  height: "10px",
  width: "2px",
});

export const PopoverWrapper = styled(Content, {
  width: "100%",
  zIndex: "200",
  animationDuration: "400ms",
  borderRadius: "$default",
  backgroundColor: "$layer3",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const PopoverContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
