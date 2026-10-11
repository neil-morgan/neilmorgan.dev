"use client";

import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./MasonryGrid.module.css";
import type { MasonryGridLayoutProps } from "./MasonryGrid.types";

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
