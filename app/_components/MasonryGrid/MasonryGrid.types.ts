import { PropsWithChildren } from "react";
import type { CssSizeValueType } from "@/app/_styles";

export type MasonryGridSkeletonProps = MasonryGridProps & {
  count: number;
};

export type MasonryGridLayoutProps = PropsWithChildren<MasonryGridProps> & {
  onReady: () => void;
};

export type MasonryGridProps = {
  gutter: string;
  responsive?: { [bp: number]: number };
  heights?: CssSizeValueType[];
};
