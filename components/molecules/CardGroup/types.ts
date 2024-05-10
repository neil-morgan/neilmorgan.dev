import type { TagType, ImagesMap } from "@/service";

export type CardGroupProps = {
  heading: string;
  base64Map: ImagesMap;
  showCount?: boolean;
  items:
    | {
        title: string;
        description: string;
        slug: string;
        tags?: TagType[];
        image: {
          title: string | null;
          url: string | null;
          description: string | null;
        } | null;
      }[]
    | null;
};
