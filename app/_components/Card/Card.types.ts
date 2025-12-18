import type { PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  href?: string;
  className?: string;
  noHighlight?: boolean;
  ref?: React.Ref<HTMLButtonElement | HTMLDivElement>;
}>;
