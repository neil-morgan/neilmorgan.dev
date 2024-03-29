import type { RichtextType, Asset, ImagesMap } from "@/service";

export type NavigableRichtextProps = {
  content: RichtextType;
  image?: Asset;
  base64Map?: ImagesMap;
};

type NavigableContentHeadingType = { id: string; label: string; href: string };

export type NavigableContentHeadingsType = {
  heading: NavigableContentHeadingType;
  subHeadings: { heading: NavigableContentHeadingType }[];
}[];
