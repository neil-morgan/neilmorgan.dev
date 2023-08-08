"use client";

import { ConditionalWrapper } from "../ConditionalWrapper";
import type { LogoProps } from "./types";
import { Svg, WrapperLink } from "./styles";

export const Logo = ({ size = 20, isLink = false }: LogoProps) => (
  <ConditionalWrapper
    if={isLink}
    wrapWith={children => <WrapperLink href="/">{children}</WrapperLink>}>
    <Svg
      fill="currentColor"
      height={`${size}px`}
      viewBox="0 0 100 100"
      width={`${size}px`}>
      <polygon points="100,50 50,0 0,50 50,100 60,90 20,50 50,20 90,60" />
      <polygon points="80,70 50,40 40,50 70,80" />
    </Svg>
  </ConditionalWrapper>
);
