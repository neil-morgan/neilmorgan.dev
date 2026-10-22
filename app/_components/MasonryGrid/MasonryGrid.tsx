"use client";

import {
  Children,
  isValidElement,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";
import dynamic from "next/dynamic";
import { BREAKPOINTS } from "@/app/_styles";
import styles from "./MasonryGrid.module.css";
import { MasonryGridSkeleton } from "./MasonryGridSkeleton";
import type { MasonryGridProps } from "./MasonryGrid.types";

const MasonryGridLayout = dynamic(() => import("./MasonryGridLayout"), {
  ssr: false,
});

const defaultResponsive: { [bp: number]: number } = {
  [BREAKPOINTS.base]: 1,
  [BREAKPOINTS.sm]: 2,
  [BREAKPOINTS.xl]: 3,
};

export const MasonryGrid = ({
  children,
  gutter,
  heights = ["18rem", "24rem", "20rem", "16rem"],
  responsive = defaultResponsive,
}: PropsWithChildren<MasonryGridProps>) => {
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const count = Children.toArray(children).filter(isValidElement).length;

  if (count === 0) return null;

  return (
    <div className={styles.wrapper} aria-busy={!ready}>
      {!ready && (
        <MasonryGridSkeleton
          count={count}
          gutter={gutter}
          heights={heights}
          responsive={responsive}
        />
      )}
      <div
        className={!ready ? styles.pending : undefined}
        aria-hidden={!ready ? true : undefined}
        inert={!ready ? true : undefined}
      >
        <MasonryGridLayout
          gutter={gutter}
          responsive={responsive}
          onReady={onReady}
        >
          {children}
        </MasonryGridLayout>
      </div>
    </div>
  );
};
