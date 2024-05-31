import type { CSS } from "@stitches/react";
import type { TagType } from "@/service";

export type TagProps = {
  slug?: string;
};

export type TagListProps = {
  list: TagType[];
  css?: CSS;
};
