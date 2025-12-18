import { IconButton, Button, SiteNavList, Popover } from "@/app/_components";
import { SiteNavContent } from "@/app/_content";

import styles from "./SiteHeader.module.css";

export const SiteHeader = async () => (
  <SiteNavContent>
    {({ allLinks, social }) => (
      <header className={styles["site-header"]}>
        <ul>
          <IconButton icon="siteLogo" iconSize={0.6} href="/" />
          {allLinks.map((link, index) =>
            link ? (
              <Button
                className={styles.desktop}
                key={index}
                label={link.label}
                href={link.href}
              />
            ) : null
          )}
        </ul>

        <ul>
          {social?.map((link, index) =>
            link ? (
              <IconButton
                key={index}
                href={link.url}
                icon={link.icon}
                className={styles.desktop}
                iconSize={0.5}
              />
            ) : null
          )}
        </ul>

        <Popover
          className={styles.mobile}
          trigger={
            <IconButton
              className={styles.mobile}
              icon="menu"
              iconSize={0.5}
              ariaLabel="Open Menu"
            />
          }
        >
          <SiteNavList />
        </Popover>
      </header>
    )}
  </SiteNavContent>
);
