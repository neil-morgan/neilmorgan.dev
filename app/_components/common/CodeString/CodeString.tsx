import styles from "./CodeString.module.css";

import type { CodeStringProps } from "./types";

export const CodeString = ({ text }: CodeStringProps) => (
  <code
    className={styles.container}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);
