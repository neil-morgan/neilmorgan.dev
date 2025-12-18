import { Breadcrumbs } from "@/app/_components";

import styles from "./PageHeader.module.css";

import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = ({ slug, title, description }: PageHeaderProps) => (
  <header className={styles["page-header"]}>
    <Breadcrumbs crumbs={slug} />
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </header>
);
