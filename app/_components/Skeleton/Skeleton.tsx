import type { HTMLAttributes } from "react";
import { combineClassNames } from "@/app/_utils";
import styles from "./Skeleton.module.css";

export type SkeletonProps = Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    {...props}
    className={combineClassNames(styles.skeleton, styles.shimmer, className)}
    aria-hidden="true"
  />
);
