import {
  Richtext,
  type RichtextLinksType,
  PageHeader,
  Footer,
} from "@/app/_components";
import {
  PageContentBySlugDocument,
  type PageHeaderFragment,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";

import { Category } from "../Category";

import styles from "./Page.module.css";

export const Page = async ({ slug }: { slug: string[] }) => {
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: slug[1] || slug[0],
    },
  });

  const page = pageData?.pageCollection?.items[0];
  if (!page) return <Category slug={slug} />;

  const headerProps = {
    slug: slug || [],
    links: page.links,
    title: page.title,
    kicker: page.kicker,
    images: page.images,
    description: page.description,
  } as PageHeaderFragment & { slug: string[] };

  return (
    <main className={styles.page}>
      <PageHeader {...headerProps} />
      {page.content && (
        <Richtext
          json={page.content.json}
          links={page.content.links as RichtextLinksType}
        />
      )}
      <Footer />
    </main>
  );
};
