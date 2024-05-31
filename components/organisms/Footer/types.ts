import type { NavigationType, SocialItemFragment } from "@/service";

export type FooterProps = {
  content: {
    navigation: NavigationType;
    socialItems: SocialItemFragment[];
  };
};
