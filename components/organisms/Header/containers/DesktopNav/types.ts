import type { HeaderProps } from "../../types";

export type DesktopNavProps = {
  openItem: number | null;
  setOpenItem: React.Dispatch<React.SetStateAction<number | null>>;
} & HeaderProps;
