import type { NavigationType } from "@/types";
import { type SocialItem } from "@/graphql";

export type DesktopNavProps = {
  items: NavigationType;
  social: SocialItem[];
  openItem: number | false;
  setOpenItem: React.Dispatch<React.SetStateAction<number | false>>;
};
