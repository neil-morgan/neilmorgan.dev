import type { ImageType } from "@/service";

export type PodType = {
  image: ImageType;
  href?: string | null
  heading: string;
};
