import type { TagType } from "@/service";

type TagColorType = "primary" | "secondary";

export type TagProps = {
  slug?: string;
  color?: TagColorType;
};

export type TagListProps = {
  list: TagType[];
  color?: TagColorType;
};
