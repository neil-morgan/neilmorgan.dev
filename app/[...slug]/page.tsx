import { notFound } from "next/navigation";
import {
  AllPageSlugsDocument,
  PageContentBySlugDocument,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { getEmbeddedEntries } from "@/app/_helpers/get-embedded-entries";
import { Footer, PageContent } from "@/app/_components";
import styles from "./page.module.css";
import type { PageParams } from "./page.types";

export const dynamicParams = true;

const getPageDataForRoute = async (routeSegments: string[]) => {
  const segments = routeSegments.filter(Boolean);

  if (segments.length > 1) {
    const typedPageData = await fetchContent({
      document: PageContentBySlugDocument,
      variables: {
        slug: segments.slice(1).join("/"),
        pageType_exists: true,
      },
    });
    const typedPage = typedPageData?.pageCollection?.items[0];
    if (typedPage?.pageType?.toLowerCase() === segments[0].toLowerCase())
      return { pageData: typedPageData, page: typedPage };
  }

  const slug = segments.join("/") || "/";
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: { slug, pageType_exists: false },
  });

  return { pageData, page: pageData?.pageCollection?.items[0] };
};

export const generateStaticParams = async () => {
  const pageData = await fetchContent({
    document: AllPageSlugsDocument,
    preview: false,
  });
  const pages = pageData.pageCollection?.items;
  if (!pages) return [];
  const routes: { slug: string[] }[] = [];
  pages.forEach((page) => {
    if (!page?.slug) return;
    if (page.pageType) {
      routes.push({
        slug: [
          page.pageType.toLowerCase(),
          ...(page.slug === "/" ? [] : page.slug.split("/")),
        ],
      });
    } else {
      routes.push({
        slug: page.slug === "/" ? [] : page.slug.split("/"),
      });
    }
  });
  return routes;
};

export const generateMetadata = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;
  const { page } = await getPageDataForRoute(params.slug || []);
  return {
    title: `Neil Morgan | ${page?.metaTitle || "Not found"}`,
    ...(page?.description && {
      description: page.description,
    }),
  };
};

const Root = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;
  const { pageData, page } = await getPageDataForRoute(params.slug);

  if (!page) notFound();

  return (
    <main className={styles.page}>
      <PageContent
        embeddedEntries={getEmbeddedEntries(page)}
        pageData={pageData}
        slug={params.slug}
      />
      <Footer withPadding />
    </main>
  );
};

export default Root;
