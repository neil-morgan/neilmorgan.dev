import { SiteNavContent } from "@/app/_content";

import styles from "./SiteNavList.module.css";

export const SiteNavList = async () => (
  <SiteNavContent>
    {({ allLinks, social }) => (
      <div className={styles.siteNavList}>
        {[
          { heading: "Pages", items: allLinks },
          { heading: "Links", items: social },
        ].map((list, index) => (
          <div key={index} className={styles.listSection}>
            <h3 className={styles.listHeading}>{list.heading}</h3>
            <ul className={styles.listItems}>
              {list.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.listItem}>
                  {"url" in item ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a href={item.href} className={styles.link}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </SiteNavContent>
);
