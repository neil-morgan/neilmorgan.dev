import { notFound } from "next/navigation";
import {
  AllPageSlugsDocument,
  PageContentBySlugDocument,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { getEmbeddedEntries } from "@/app/_helpers/get-embedded-entries";
import {
  BlogListing,
  Footer,
  PageContent,
  PageHeader,
} from "@/app/_components";
import styles from "./page.module.css";
import type { PageParams } from "./page.types";

export const dynamicParams = true;

type TypeIndexTemplate = {
  title: string;
  description: string;
  render: () => React.ReactNode;
};

// Index pages generated from a page `type` (e.g. /blog lists all "Blog" pages)
const typeIndexTemplates: Record<string, TypeIndexTemplate> = {
  blog: {
    title: "Welcome to my Blog",
    description:
      "Below are my notes on creativity, curiosity, and the small discoveries that make life richer.",
    render: () => <BlogListing />,
  },
};

const getTypeIndexTemplate = (routeSegments: string[]) => {
  const segments = routeSegments.filter(Boolean);
  if (segments.length !== 1) return null;
  return typeIndexTemplates[segments[0].toLowerCase()] ?? null;
};

const getPageDataForRoute = async (routeSegments: string[]) => {
  const segments = routeSegments.filter(Boolean);

  if (segments.length > 1) {
    const typedPageData = await fetchContent({
      document: PageContentBySlugDocument,
      variables: {
        slug: segments.slice(1).join("/"),
        type_exists: true,
      },
    });
    const typedPage = typedPageData?.pageCollection?.items[0];
    if (typedPage?.type?.toLowerCase() === segments[0].toLowerCase())
      return { pageData: typedPageData, page: typedPage };
  }

  const slug = segments.join("/") || "/";
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: { slug, type_exists: false },
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
  const typeIndexes = new Set<string>();
  pages.forEach((page) => {
    if (!page?.slug) return;
    if (page.type) {
      const type = page.type.toLowerCase();
      if (typeIndexTemplates[type]) typeIndexes.add(type);
      routes.push({
        slug: [type, ...(page.slug === "/" ? [] : page.slug.split("/"))],
      });
    } else {
      routes.push({
        slug: page.slug === "/" ? [] : page.slug.split("/"),
      });
    }
  });
  typeIndexes.forEach((type) => {
    if (!routes.some(({ slug }) => slug.join("/") === type))
      routes.push({ slug: [type] });
  });
  return routes;
};

export const generateMetadata = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;
  const typeIndex = getTypeIndexTemplate(params.slug || []);
  if (typeIndex) return { title: `Neil Morgan | ${typeIndex.title}` };

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
  const typeIndex = getTypeIndexTemplate(params.slug);

  if (typeIndex) {
    return (
      <main className={styles.page}>
        <PageHeader
          slug={params.slug}
          page={{
            title: typeIndex.title,
            kicker: null,
            description: typeIndex.description,
            image: null,
          }}
        />
        {typeIndex.render()}
        <Footer withPadding />
      </main>
    );
  }

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
