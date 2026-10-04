import { Breadcrumbs, AspectImage } from "@/app/_components";

import styles from "./PageHeader.module.css";

import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = ({ page, slug, inspectorProps }: PageHeaderProps) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerContent}>
        <Breadcrumbs crumbs={slug} />
        <h1 {...inspectorProps({ fieldId: "title" })}>{page.title}</h1>
        {page.kicker && (
          <h4
            className={styles.kicker}
            {...inspectorProps({ fieldId: "kicker" })}
          >
            {page.kicker}
          </h4>
        )}
        {page.description && (
          <p {...inspectorProps({ fieldId: "description" })}>
            {page.description}
          </p>
        )}
      </div>
      {page.image?.url && page.image.description && (
        <AspectImage
          size="25rem"
          className={styles.headerImage}
          url={page.image.url}
          description={page.image.description}
        />
      )}
    </header>
  );
};
