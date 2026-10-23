import { Breadcrumbs, AspectImage, TagList } from "@/app/_components";
import styles from "./PageHeader.module.css";
import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = ({ page, slug, inspectorProps }: PageHeaderProps) => {
  const image = page.image?.image;

  return (
    <header className={styles.pageHeader}>
      {slug && page.sys && <Breadcrumbs crumbs={slug} sys={page.sys} />}
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <h1 {...inspectorProps?.({ fieldId: "title" })}>{page.title}</h1>
          {page.kicker && (
            <p
              className={styles.kicker}
              {...inspectorProps?.({ fieldId: "kicker" })}
            >
              {page.kicker}
            </p>
          )}
          {page.description && (
            <p {...inspectorProps?.({ fieldId: "description" })}>
              {page.description}
            </p>
          )}
          {page.contentfulMetadata?.tags?.length > 0 && (
            <TagList
              color="secondary"
              className={styles.tagList}
              list={page.contentfulMetadata.tags}
              size="md"
            />
          )}
        </div>
        {image?.url && image?.description && (
          <AspectImage
            size="20rem"
            sizes="(max-width: 800px) 100vw, 20rem"
            fit="cover"
            loading="eager"
            className={styles.headerImage}
            url={image.url}
            sourceSize={image}
            focalPoint={page.image?.focalPoint}
            description={image.description}
          />
        )}
      </div>
    </header>
  );
};
