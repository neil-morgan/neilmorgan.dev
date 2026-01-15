import {
  AllPageSlugsDocument,
  CategoryDocument,
  PageContentBySlugDocument,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { toSentenceCase } from "@/app/_utils";

import { Home, Page } from "./_templates";

import type { PageParams } from "./_templates/Page/Page.types";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const pageData = await fetchContent({ document: AllPageSlugsDocument });
  const pages = pageData.pageCollection?.items;
  if (!pages) return [];
  const routes: { slug: string[] }[] = [];
  const categories = new Set<string>();
  pages.forEach((page) => {
    if (!page?.slug) return;
    if (page.category) {
      categories.add(page.category.toLowerCase());
      routes.push({
        slug: [
          page.category.toLowerCase(),
          ...(page.slug === "/" ? [] : page.slug.split("/")),
        ],
      });
    } else {
      routes.push({
        slug: page.slug === "/" ? [] : page.slug.split("/"),
      });
    }
  });
  categories.forEach((category) => routes.push({ slug: [category] }));
  return routes;
};

export const generateMetadata = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;
  if (params.slug?.length === 1) {
    const categoryData = await fetchContent({
      document: CategoryDocument,
      variables: { category: toSentenceCase(params.slug[0]) },
    });
    const categoriesContent = categoryData?.pageCollection?.items;
    if (categoriesContent && categoriesContent.length > 0) {
      const categoryName = toSentenceCase(params.slug[0]);
      return {
        title: `Neil Morgan | ${categoryName}`,
        description: `Browse all ${categoryName.toLowerCase()} pages`,
      };
    }
  }
  const data = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: !params.slug ? "/" : params.slug[1] || params.slug[0],
    },
  });
  const page = data?.pageCollection?.items[0];
  return {
    title: `Neil Morgan | ${page?.metaTitle || "Not found"}`,
    ...(page?.description && {
      description: page.description,
    }),
  };
};

const Root = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;
  const IS_HOME_PAGE = !params.slug;
  if (IS_HOME_PAGE) return <Home />;
  return <Page slug={params.slug} />;
};

export default Root;
