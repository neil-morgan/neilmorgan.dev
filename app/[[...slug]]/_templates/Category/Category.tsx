import styles from "./Categories.module.css";

import type { CategoryProps } from "./Category.types";

export const Category = async ({ content }: CategoryProps) => {
  return (
    <div className={styles.categories}>{JSON.stringify(content, null, 2)}</div>
  );
};
