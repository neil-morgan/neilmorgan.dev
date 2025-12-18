import { HeaderContentDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";

import { SiteHeader } from "./SiteHeader";

export const SiteHeaderServer = async () => {
  const data = await fetchContent({
    document: HeaderContentDocument,
  });

  const categories = [
    ...new Set(
      data.categories?.items?.map((item) => item?.category).filter(Boolean)
    ),
  ].map((category) => ({
    label: category,
    href: `/${category?.toLowerCase()}`,
  }));

  const links = data.uniquePages?.items
    ?.map((item) => {
      if (!item?.metaTitle || !item?.slug) return null;
      return {
        label: item.metaTitle,
        href: `/${item.slug}`,
      };
    })
    .filter(Boolean);

  const allLinks = [...categories, ...(links || [])];

  const social = data.social?.items
    ?.map((item) => {
      if (!item?.label || !item?.url) return null;
      return {
        label: item.label,
        url: item.url,
      };
    })
    .filter(Boolean);

  return <SiteHeader links={allLinks} social={social} />;
};
