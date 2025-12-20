import type { ReactNode } from "react";

import { notFound } from "next/navigation";

import { PageHeader, Richtext } from "@/app/_components";
import type { RichtextLinksType } from "@/app/_components/Richtext";
import {
  AllPageSlugsDocument,
  CategoryDocument,
  PageContentBySlugDocument,
  type CategoryContentFragment,
  type PageHeaderFragment,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { toSentenceCase } from "@/app/_utils";

import { Category } from "./_templates";
import styles from "./Page.module.css";

import type { PageParams } from "./Page.types";

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

const Page = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;

  let content: ReactNode = null;
  let headerProps:
    | (PageHeaderFragment & {
        slug: string[];
      })
    | null = null;

  if (params.slug?.length === 1) {
    const category = toSentenceCase(params.slug[0]);
    console.log(category);
    const categoryData = await fetchContent({
      document: CategoryDocument,
      variables: { category },
    });
    const categoriesContent = categoryData?.pageCollection?.items;
    if (categoriesContent && categoriesContent.length > 0) {
      headerProps = {
        slug: params.slug,
        title: category,
        kicker: null,
        image: null,
        description: null,
      };
      content = (
        <Category content={categoriesContent as CategoryContentFragment[]} />
      );
    }
  }

  if (!content) {
    const data = await fetchContent({
      document: PageContentBySlugDocument,
      variables: {
        slug: !params.slug ? "/" : params.slug[1] || params.slug[0],
      },
    });
    if (!data || data?.pageCollection?.items.length === 0) return notFound();
    const page = data?.pageCollection?.items[0];
    if (page?.title) {
      headerProps = {
        slug: params.slug || [],
        title: page.title,
        kicker: page.kicker,
        image: page.image,
        description: page.description,
      };
    }
    content = page?.content && (
      <Richtext
        json={page.content.json}
        links={page.content.links as RichtextLinksType}
      />
    );
  }

  return (
    <main className={styles.page}>
      {headerProps && <PageHeader {...headerProps} />}
      {content}
    </main>
  );
};

export default Page;
