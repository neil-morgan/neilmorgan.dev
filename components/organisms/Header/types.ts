import type { NavigationType } from "@/types";
import type { SocialItemFragment } from "@/graphql";

export type HeaderProps = {
  content: {
    navigation: NavigationType;
    social: SocialItemFragment[];
  };
};

export type NavigationItemProps = {
  title: string;
  href: string;
  icon?: string;
  description?: string;
  onClick?: () => void;
};
