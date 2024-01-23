import type { NavigationType } from "@/types";
import { type SocialItem } from "@/graphql";

export type MobileNavProps = {
  items: NavigationType;
  openItem: number | false;
  social: SocialItem[];
  setOpenItem: React.Dispatch<React.SetStateAction<number | false>>;
};
