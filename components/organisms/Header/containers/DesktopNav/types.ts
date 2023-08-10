import type { NavigationType } from "@/types";
import { type SocialItem } from "@/graphql";

export type DesktopNavProps = {
  items: NavigationType;
  social: SocialItem[];
  openItem: number | null;
  setOpenItem: React.Dispatch<React.SetStateAction<number | null>>;
};
