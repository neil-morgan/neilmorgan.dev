import { Skeleton } from "../Skeleton";
import styles from "./MasonryGrid.module.css";
import type { MasonryGridProps } from "./types";

type MasonryGridSkeletonProps = MasonryGridProps & {
  count: number;
};

const heights = ["18rem", "24rem", "20rem", "16rem"];

export const MasonryGridSkeleton = ({
  count,
  gutter,
  responsive = {},
}: MasonryGridSkeletonProps) => {
  const breakpoints = Object.entries(responsive)
    .map(([key, columns]) => {
      const breakpoint = Number(key);
      if (
        key.trim() === "" ||
        !Number.isFinite(breakpoint) ||
        breakpoint < 0 ||
        !Number.isInteger(columns) ||
        columns < 1
      ) {
        throw new Error(
          "MasonryGrid requires finite non-negative breakpoints and positive integer column counts.",
        );
      }
      return { breakpoint, columns };
    })
    .sort((a, b) => a.breakpoint - b.breakpoint);
  const configuration =
    breakpoints
      .map(({ breakpoint, columns }) => `${breakpoint}:${columns}`)
      .join(";") || "empty";
  const selector = `[data-masonry-skeleton="${configuration}"]`;
  const css = [
    `${selector}{column-count:${breakpoints[0]?.columns ?? 1};}`,
    ...breakpoints
      .slice(1)
      .map(
        ({ breakpoint, columns }) =>
          `@media (width > ${breakpoint}px){${selector}{column-count:${columns};}}`,
      ),
  ].join("\n");

  return (
    <>
      <style>{css}</style>
      <div
        className={styles.skeleton}
        data-masonry-skeleton={configuration}
        style={{ columnGap: gutter }}
        aria-hidden="true"
      >
        {Array.from({ length: count }, (_, index) => (
          <Skeleton
            key={index}
            className={styles.placeholder}
            style={{
              height: heights[index % heights.length],
              marginBottom: gutter,
            }}
          />
        ))}
      </div>
    </>
  );
};
