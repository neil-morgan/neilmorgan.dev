import type { TagType } from "@/types";

export type CardProps = {
  description?: string;
  heading: string;
  href: string;
  subHeading?: string;
  tags: TagType[];
};
