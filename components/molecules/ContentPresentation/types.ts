import type { TagType } from "@/service";

export type ContentPresentationProps = {
  title: string | null;
  body: string | null;
  reverse?: boolean;
  cta: {
    label: string;
    href: string | null;
  };
  label?: string;
  image: {
    url: string;
    description: string;
    blurDataUrl: string;
  };

  tags?: TagType[];
};
