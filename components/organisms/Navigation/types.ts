import type { CategoryType } from "@/types";

export type NavigationProps = {
  posts: CategoryType[];
};

export type NavigationItemProps = {
  title: string;
  href: string;
  description?: string;
};

export type NavigationItemRef =
  | ((instance: HTMLAnchorElement | null) => void)
  | React.RefObject<HTMLAnchorElement>
  | null
  | undefined;
