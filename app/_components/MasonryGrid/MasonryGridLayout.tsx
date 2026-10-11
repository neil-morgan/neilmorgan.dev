"use client";

import { useEffect, type PropsWithChildren } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./MasonryGrid.module.css";
import type { MasonryGridProps } from "./types";

type MasonryGridLayoutProps = PropsWithChildren<MasonryGridProps> & {
  onReady: () => void;
};

const MasonryGridLayout = ({
  children,
  gutter,
  responsive,
  onReady,
}: MasonryGridLayoutProps) => {
  useEffect(() => {
    // Keep the initial responsive measurement behind the placeholder.
    const frame = requestAnimationFrame(onReady);
    return () => cancelAnimationFrame(frame);
  }, [onReady]);

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

export default MasonryGridLayout;
