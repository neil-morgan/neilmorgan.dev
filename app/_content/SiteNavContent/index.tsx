import { cloneElement, ReactElement } from "react";

import { IconNameType } from "@/app/_components/common/Icon";
import { HeaderContentDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";

import { SiteNavContentProps } from "./SiteNavContent.types";

export * from "./SiteNavContent.types";

export const SiteNavContent = async ({ children }: SiteNavContentProps) => {
  const data = await fetchContent({
    document: HeaderContentDocument,
  });

  const categories = [
    ...new Set(
      data.categories?.items?.map((item) => item?.category).filter(Boolean)
    ),
  ]
    .filter((category): category is string => Boolean(category))
    .map((category) => ({
      label: category,
      href: `/${category.toLowerCase()}`,
    }));

  const links = data.uniquePages?.items
    ?.map((item) => {
      if (!item?.metaTitle || !item?.slug) return null;
      return {
        label: item.metaTitle,
        href: `/${item.slug}`,
      };
    })
    .filter((link): link is { label: string; href: string } => link !== null);

  const allLinks = [...categories, ...(links || [])];

  const social =
    data.social?.items
      ?.map((item) => {
        if (!item?.label || !item?.url) return null;
        return {
          label: item.label,
          url: item.url,
          icon: item.icon as IconNameType,
        };
      })
      .filter(
        (item): item is { label: string; url: string; icon: IconNameType } =>
          item !== null
      ) || [];

  const props = {
    allLinks,
    social,
  };

  // Support both render props (function) and element cloning
  if (typeof children === 'function') {
    return children(props);
  }

  return cloneElement(children as ReactElement, props);
};
