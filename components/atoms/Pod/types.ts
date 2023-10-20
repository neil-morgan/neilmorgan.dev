import type { ReactNode } from "react";

export type PodProps = {
  heading: string;
  description?: string;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  cta?: {
    href: string;
    label: string;
  };
};
