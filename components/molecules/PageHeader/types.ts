import { BreadcrumbType } from "@/service";

export type PageHeaderProps = {
  title: string;
  kicker?: string | null;
  subTitle?: string | null;
  breadcrumbs?: BreadcrumbType[];
};
