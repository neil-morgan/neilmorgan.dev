import type { NavigationType } from "@/types";

export type NavigationProps = {
  items: NavigationType;
};

export type NavigationItemProps = {
  title: string;
  href: string;
  description?: string;
  onClick?: () => void;
};

export type NavigationItemRef =
  | ((instance: HTMLAnchorElement | null) => void)
  | React.RefObject<HTMLAnchorElement>
  | null
  | undefined;

export type PopoverProps = {
  children: React.ReactNode;
  anchor: React.ReactNode;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number | null>>;
};
