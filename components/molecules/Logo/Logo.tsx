"use client";

import type { LogoProps } from "./types";
import { Svg } from "./styles";
import { IconButton, ConditionalWrapper } from "@/components/atoms";

export const Logo = ({ size = "lg", isLink = false }: LogoProps) => (
  <ConditionalWrapper
    if={isLink}
    wrapWith={children => (
      <IconButton href="/" size={size} priority="contrast">
        {children}
      </IconButton>
    )}>
    <Svg fill="currentColor" viewBox="0 0 100 100">
      <polygon points="100,50 50,0 0,50 50,100 60,90 20,50 50,20 90,60" />
      <polygon points="80,70 50,40 40,50 70,80" />
    </Svg>
  </ConditionalWrapper>
);
