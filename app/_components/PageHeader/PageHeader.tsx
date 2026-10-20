import { Breadcrumbs, AspectImage } from "@/app/_components";

import styles from "./PageHeader.module.css";

import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = ({ page, slug, inspectorProps }: PageHeaderProps) => {
  const image = page.image?.image;
  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerContent}>
        <Breadcrumbs crumbs={slug} />
        <h1 {...inspectorProps?.({ fieldId: "title" })}>{page.title}</h1>
        {page.kicker && (
          <h4
            className={styles.kicker}
            {...inspectorProps?.({ fieldId: "kicker" })}
          >
            {page.kicker}
          </h4>
        )}
        {page.description && (
          <p {...inspectorProps?.({ fieldId: "description" })}>
            {page.description}
          </p>
        )}
      </div>
      {image?.url && image?.description && (
        <AspectImage
          size="25rem"
          sizes="(max-width: 800px) 100vw, 800px"
          fit="cover"
          loading="eager"
          className={styles.headerImage}
          url={image.url}
          sourceSize={image}
          focalPoint={page.image?.focalPoint}
          description={image.description}
        />
      )}
    </header>
  );
};
