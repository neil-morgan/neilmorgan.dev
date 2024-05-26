import type { NavigationType } from "@/service";
import { type SocialItemFragment } from "@/service";

export type MobileNavProps = {
  items: NavigationType;
  social: SocialItemFragment[];
  openItem: number | false;
  setOpenItem: React.Dispatch<React.SetStateAction<number | false>>;
};
