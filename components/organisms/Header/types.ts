import type { NavigationType } from "@/types";

export type HeaderProps = {
  items: NavigationType;
};

export type NavigationItemProps = {
  title: string;
  href: string;
  icon?: string;
  description?: string;
  onClick?: () => void;
};

export type HeaderItemRef =
  | ((instance: HTMLAnchorElement | null) => void)
  | React.RefObject<HTMLAnchorElement>
  | null
  | undefined;
