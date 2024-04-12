import type { NavigationType } from "@/service";
import type { SocialItemFragment } from "@/service";

export type HeaderProps = {
  content: {
    navigation: NavigationType;
    socialItems?: SocialItemFragment[] | null
  };
};

export type NavigationItemProps = {
  title: string;
  href: string;
  icon?: string;
  description?: string;
  onClick?: () => void;
};
