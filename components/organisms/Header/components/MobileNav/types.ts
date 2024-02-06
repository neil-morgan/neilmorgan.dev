import type { NavigationType } from "@/types";
import { type SocialItemFragment } from "@/graphql";

export type MobileNavProps = {
  items: NavigationType;
  social?: SocialItemFragment[] | null;
  openItem: number | false;
  setOpenItem: React.Dispatch<React.SetStateAction<number | false>>;
};
