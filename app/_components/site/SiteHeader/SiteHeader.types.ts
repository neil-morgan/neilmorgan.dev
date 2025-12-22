import type { IconNameType } from "@/app/_components/common/Icon";

export type SiteHeaderProps = {
  links: {
    label: string;
    href: string;
  }[];

  social?: {
    label: string;
    url: string;
    icon: IconNameType;
  }[];
};
