import type { CssSizeType } from "@/app/_styles";

export type TagProps = {
  slug?: string;
  size?: CssSizeType;
  color?: "primary" | "secondary";
  variant?: "ghost" | "solid";
  className?: string;
};

export type TagListProps = {
  list: {
    title: string;
    slug?: string;
  }[];
  color?: "primary" | "secondary";
  size?: CssSizeType;
  className?: string;
};
