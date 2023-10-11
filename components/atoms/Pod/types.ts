import type { ReactNode } from "react";

export type PodProps = {
  heading: string;
  description?: string;
  children?: ReactNode;
  cta?: {
    href: string;
    label: string;
  };
};
