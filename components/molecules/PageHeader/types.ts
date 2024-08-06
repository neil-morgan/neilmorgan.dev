import type { BreadcrumbType, ImagesMap, ImageType } from "@/service";

export type PageHeaderProps = {
  title: string;
  kicker?: string | null;
  heading?: string | null;
  breadcrumbs?: BreadcrumbType[];
  base64Map?: ImagesMap;
  image?: ImageType;
};
