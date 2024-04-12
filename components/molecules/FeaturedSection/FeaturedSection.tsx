"use client"

import { Wrapper, Body } from "./styles";
import { BackgroundSlice } from "@/components/atoms";

export const FeaturedSection = ({ children }: React.PropsWithChildren) => (
  <Wrapper>
    <BackgroundSlice />
    <Body>{children}</Body>
    <BackgroundSlice reverse />
  </Wrapper>
);
