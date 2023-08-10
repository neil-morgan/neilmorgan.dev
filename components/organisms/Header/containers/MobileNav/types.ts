import type { HeaderProps } from "../../types";

export type MobileNavProps = {
  openItem: number | null;
  setOpenItem: React.Dispatch<React.SetStateAction<number | null>>;
} & HeaderProps;
