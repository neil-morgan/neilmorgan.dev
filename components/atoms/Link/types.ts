import type { ReactNode } from "react";

export type LinkProps = {
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
};
