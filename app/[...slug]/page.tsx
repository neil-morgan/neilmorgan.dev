import { notFound } from "next/navigation";
import {
  AllPageSlugsDocument,
  CategoryDocument,
  PageContentBySlugDocument,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import type { Typename } from "@/app/_types";
import { toSentenceCase } from "@/app/_utils";
import { Components, Footer } from "@/app/_components";
import { LivePageContent } from "./LivePageContent";
import styles from "./page.module.css";

import type { PageParams } from "./page.types";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const pageData = await fetchContent({
    document: AllPageSlugsDocument,
    preview: false,
  });
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
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: params.slug[1] || params.slug[0],
    },
  });
  const page = pageData?.pageCollection?.items[0];

  if (!page) notFound();

  const embeddedEntries = [
    ...(page.content?.links.entries.block ?? []),
    ...(page.content?.links.entries.inline ?? []),
  ].flatMap((entry) => {
    if (!entry?.sys.id || !entry.__typename) return [];
    return [
      {
        id: entry.sys.id,
        node: (
          <Components
            id={entry.sys.id}
            __typename={entry.__typename as Typename}
          />
        ),
      },
    ];
  });

  return (
    <main className={styles.page}>
      <LivePageContent
        embeddedEntries={embeddedEntries}
        pageData={pageData}
        slug={params.slug}
      />
      <Footer withPadding />
    </main>
  );
};

export default Root;
