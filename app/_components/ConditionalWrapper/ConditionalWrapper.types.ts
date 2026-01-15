import type { ReactNode } from "react";

export interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
  children: ReactNode;
}
