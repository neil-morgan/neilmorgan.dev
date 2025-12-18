import { IconButton, Button } from "@/app/_components";

import styles from "./SiteHeader.module.css";

import type { SiteHeaderProps } from "./SiteHeader.types";

export const SiteHeader = ({ links, social }: SiteHeaderProps) => {
  return (
    <header className={styles["site-header"]}>
      <ul>
        <IconButton icon="siteLogo" iconSize={0.6} href="/" />
        {links.map((link, index) =>
          link ? (
            <Button key={index} label={link.label} href={link.href} />
          ) : null
        )}
      </ul>

      <ul>
        {social?.map((link, index) =>
          link ? (
            <Button key={index} label={link.label} href={link.url} />
          ) : null
        )}
      </ul>
    </header>
  );
};
