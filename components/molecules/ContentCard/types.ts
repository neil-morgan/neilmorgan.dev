import type { CSS } from "@stitches/react";

export type ContentCardProps = {
  css?: CSS;
  title: string;
  description: string;
  slug: string;
  category: {
    title: string;
    slug: string;
  };
};
