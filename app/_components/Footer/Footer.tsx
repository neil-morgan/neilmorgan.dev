import { IconButton } from "@/app/_components";

import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles["footer-credentials"]}>
      <h3>Neil Morgan</h3>
      <p>
        All rights reserved
        <br />© 2024
      </p>
      <IconButton icon="siteLogo" iconSize={0.6} size="xs" href="/" />
    </div>
  </footer>
);
