import { IconButton } from "@/app/_components";
import { combineClassNames } from "@/app/_utils";

import styles from "./Footer.module.css";

import type { FooterProps } from "./Footer.types";

export const Footer = ({ withPadding = false }: FooterProps) => (
  <footer
    className={combineClassNames(
      styles.footer,
      withPadding && styles.withPadding
    )}
  >
    <div>
      <div className={styles["footer-credentials"]}>
        <h3>Neil Morgan</h3>
        <p>
          All rights reserved
          <br />© 2024
        </p>
        <IconButton icon="siteLogo" iconSize={0.6} size="xs" href="/" />
      </div>
    </div>
  </footer>
);
