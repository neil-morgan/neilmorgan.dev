import type { NavigationType } from "@/service";
import type { SocialItemFragment } from "@/service";

export type DesktopNavProps = {
  items: NavigationType
  social?: SocialItemFragment[] | null;
  openItem: number | false;
  setOpenItem: React.Dispatch<React.SetStateAction<number | false>>;
};
