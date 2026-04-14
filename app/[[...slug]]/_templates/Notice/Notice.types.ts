import type { IconNameType } from "@/app/_components/Icon";

export type NoticeProps = {
  title?: string;
  message?: string;
  action?: {
    href: string;
    label: string;
    iconLeft?: IconNameType;
    iconRight?: IconNameType;
  };
};
