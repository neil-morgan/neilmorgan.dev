import { notFound } from "next/navigation";
import {
  AllPageSlugsDocument,
  PageContentBySlugDocument,
} from "@/app/_graphql/generated";
import {
  fetchContent,
  getEmbeddedEntries,
  isDraftModeEnabled,
} from "@/app/_helpers";
import {
  LivePageHeader,
  LivePageRichtext,
  Page,
  PageHeader,
  Richtext,
} from "@/app/_components";
import styles from "./page.module.css";
import type { PageParams } from "./page.types";

const getPageDataForRoute = async (routeSegments: string[]) => {
  const slug = routeSegments.join("/") || "/";
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: { slug },
  });
  return { pageData, page: pageData?.pageCollection?.items[0] };
};

export const generateStaticParams = async () => {
  const routes: { slug: string[] }[] = [];
  let skip = 0;
  let total = 0;

  do {
    const pageData = await fetchContent({
      document: AllPageSlugsDocument,
      variables: { skip },
      preview: false,
    });
    const pageCollection = pageData.pageCollection;
    if (!pageCollection)
      throw new Error(
        `CMS returned no page collection while generating static routes at offset ${skip}.`,
      );

    total = pageCollection.total;
    if (pageCollection.items.length === 0 && skip < total) {
      throw new Error(
        `CMS returned no pages while generating static routes at offset ${skip} of ${total}.`,
      );
    }
    pageCollection.items.forEach((page) => {
      if (!page?.slug) return;
      routes.push({ slug: page.slug.split("/").filter(Boolean) });
    });
    skip += pageCollection.items.length;
  } while (skip < total);

  return routes;
};

export const generateMetadata = async ({ params: pageParams }: PageParams) => {
  const { slug = [] } = await pageParams;
  const { page } = await getPageDataForRoute(slug);
  return {
    title: `Neil Morgan | ${page?.title || "Not found"}`,
    ...(page?.description && {
      description: page.description,
    }),
  };
};

const Root = async ({ params: pageParams }: PageParams) => {
  const { slug = [] } = await pageParams;
  const { pageData, page } = await getPageDataForRoute(slug);

  if (!page) notFound();

  const isPreview = (await isDraftModeEnabled())?.previewMode === true;
  const embeddedEntries = getEmbeddedEntries(page);

  return (
    <Page>
      {isPreview ? (
        <>
          <LivePageHeader pageData={pageData} slug={slug} />
          <LivePageRichtext
            pageData={pageData}
            embeddedEntries={embeddedEntries}
            className={styles.contentField}
          />
        </>
      ) : (
        <>
          <PageHeader page={page} slug={slug} />
          {page.content && (
            <div className={styles.contentField}>
              <Richtext json={page.content.json} links={page.content.links} />
            </div>
          )}
        </>
      )}
    </Page>
  );
};

export default Root;
