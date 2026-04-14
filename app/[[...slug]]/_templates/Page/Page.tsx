import { notFound } from "next/navigation";

import {
  Richtext,
  type RichtextLinksType,
  PageHeader,
  Footer,
} from "@/app/_components";
import { PageContentBySlugDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";

import styles from "./Page.module.css";

export const Page = async ({ slug }: { slug: string[] }) => {
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: slug[1] || slug[0],
    },
  });

  const page = pageData?.pageCollection?.items[0];

  return !page ? (
    notFound()
  ) : (
    <main className={styles.page}>
      <PageHeader slug={slug} />
      {page?.content && (
        <Richtext
          json={page.content.json}
          links={page.content.links as RichtextLinksType}
        />
      )}
      <Footer withPadding />
    </main>
  );
};
