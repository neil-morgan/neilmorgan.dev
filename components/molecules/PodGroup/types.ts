import type { ImagesMap } from "@/service";

export type PodGroupType = {
  heading: string;
  base64Map: ImagesMap;
  showCount?: boolean;
  items: {
    title: string | null;
    slug: string | null;
    icon: {
      title: string | null;
      url: string | null;
      description: string | null;
    } | null;
  }[];
};
