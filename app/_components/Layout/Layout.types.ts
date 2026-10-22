import type { IconNameType, IconSize } from "@/app/_components";

export type FooterButton = {
  icon: IconNameType;
  iconSize: IconSize;
  href: string;
  size: "sm";
};

export type NavigationButton = {
  label: string;
  href: string;
  iconLeft?: IconNameType;
  disabled?: boolean;
};

export type MobileNavigationProps = {
  items: NavigationButton[];
};
