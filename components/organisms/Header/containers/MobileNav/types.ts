import type { NavigationType } from "@/types";

export type MobileNavProps = {
  items: NavigationType;
  openItem: number | null;
  setOpenItem: React.Dispatch<React.SetStateAction<number | null>>;
};
