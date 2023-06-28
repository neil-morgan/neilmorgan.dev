import type { ReactNode } from "react";

export type ConditionalWrapperProps = {
  children: ReactNode;
  if?: boolean;
  wrapWith: (children: React.ReactNode) => JSX.Element;
};
