import type { NavigationType } from "@/types";
import type { SocialItem } from "@/graphql";

export type HeaderProps = {
  navigation: NavigationType;
  social: SocialItem[];
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
