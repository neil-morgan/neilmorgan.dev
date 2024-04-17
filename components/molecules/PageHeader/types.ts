import type { BreadcrumbType, ImagesMap, ImageType } from "@/service";

export type PageHeaderProps = {
  heading: string;
  kicker?: string | null;
  body?: string | null;
  breadcrumbs?: BreadcrumbType[];
  base64Map?: ImagesMap;
  image?: ImageType;
};
