import type { ImagesMap } from "@/service";

export type PodGroupType = {
  heading: string;
  plural?: string;
  base64Map: ImagesMap;
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
