"use client";

import type { PropsWithChildren } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { MasonryGridProps } from "./types";
import { MasonryGridWrapper } from "./styles";
import { space } from "@/lib/stitches";
import { BREAKPOINTS } from "@/lib/site";

const defaultResponsive: { [bp: number]: number } = {
  [BREAKPOINTS.base]: 1,
  [BREAKPOINTS.md]: 2,
  [BREAKPOINTS.lg]: 3,
};

export const MasonryGrid = ({
  children,
  gutter,
  css,
  responsive = defaultResponsive,
}: PropsWithChildren<MasonryGridProps>) => (
  <MasonryGridWrapper css={css}>
    <ResponsiveMasonry columnsCountBreakPoints={responsive}>
      <Masonry gutter={space[gutter]}>{children}</Masonry>
    </ResponsiveMasonry>
  </MasonryGridWrapper>
);
