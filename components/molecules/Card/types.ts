import type { TagType, ImageType } from "@/service";

export type CardProps = {
  description?: string;
  heading: string;
  href: string;
  date?: string;
  tags?: TagType[];
  image?: ImageType;
  priority?: "default" | "primary" | "secondary";
};
