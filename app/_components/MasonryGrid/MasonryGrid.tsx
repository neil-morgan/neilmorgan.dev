"use client";

import type { PropsWithChildren } from "react";

import dynamic from "next/dynamic";

import { BREAKPOINTS } from "@/config";

import styles from "./MasonryGrid.module.css";

import type { MasonryGridProps } from "./types";

const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  {
    ssr: false,
  }
);

const defaultResponsive: { [bp: number]: number } = {
  [BREAKPOINTS.base]: 1,
  [BREAKPOINTS.md]: 2,
  [BREAKPOINTS.lg]: 3,
};

export const MasonryGrid = ({
  children,
  gutter,
  responsive = defaultResponsive,
}: PropsWithChildren<MasonryGridProps>) => {
  return (
    <ResponsiveMasonry
      className={styles.container}
      style={{ gap: gutter }}
      columnsCountBreakPoints={responsive}
    >
      <Masonry gutter={gutter}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};
