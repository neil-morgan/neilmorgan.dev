import type { CssSizeType } from "@/app/_styles";

export type TagListItem = {
  name: string | null;
  slug?: string;
};

export type TagProps = {
  slug?: string;
  size?: CssSizeType;
  color?: "primary" | "secondary";
  variant?: "ghost" | "solid";
  className?: string;
};

export type TagListProps = {
  list: (TagListItem | null)[];
  color?: "primary" | "secondary";
  size?: CssSizeType;
  className?: string;
};
