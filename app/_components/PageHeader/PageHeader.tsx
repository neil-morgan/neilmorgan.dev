import { PageContentBySlugDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers/fetch-content/fetch-content";

import { Breadcrumbs, AspectImage } from "@/app/_components";

import styles from "./PageHeader.module.css";

import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = async ({ slug }: PageHeaderProps) => {
  const data = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: slug[1] || slug[0],
    },
  });

  if (!data) return null;

  const { title, description, kicker, image } =
    data.pageCollection?.items[0] || {};

  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerContent}>
        <Breadcrumbs crumbs={slug} />
        <h1>{title}</h1>
        {kicker && <h4 className={styles.kicker}>{kicker}</h4>}
        {description && <p>{description}</p>}
      </div>
      {image?.url && image.description && (
        <AspectImage
          size="25rem"
          className={styles.headerImage}
          url={image?.url}
          description={image?.description}
        />
      )}
    </header>
  );
};
