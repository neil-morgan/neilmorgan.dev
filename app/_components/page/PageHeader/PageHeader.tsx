import { Breadcrumbs } from "@/app/_components";

import styles from "./PageHeader.module.css";

import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = ({
  slug,
  title,
  description,
  kicker,
}: PageHeaderProps) => (
  <>
    <header className={styles.pageHeader}>
      <div className={styles.headerText}>
        <Breadcrumbs crumbs={slug} />
        {kicker && <h3 className={styles.kicker}>{kicker}</h3>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </header>
  </>
);
