import type { TagType } from "@/service";

export type CardProps = {
  description?: string;
  heading: string;
  href: string;
  subHeading?: string;
  tags: TagType[];
};
