import type { IconType } from "@/service";

export type LinksProps = {
  label: string;
  slug: string;
  icon: IconType;
  disabled?: boolean;
}[];
