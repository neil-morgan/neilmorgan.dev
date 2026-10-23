import { Fragment } from "react";
import { formatDate, toSentenceCase } from "@/app/_utils";
import { Link } from "@/app/_components";
import styles from "./Breadcrumbs.module.css";
import type { BreadcrumbsProps } from "./types";

export const Breadcrumbs = ({
  crumbs,
  root = "/",
  rootLabel = "Home",
  sys,
}: BreadcrumbsProps) => {
  const breadcrumbs = [root, ...crumbs];
  const publishedAt = sys?.publishedAt || sys?.firstPublishedAt;
  const dateLabel = sys?.publishedAt ? "Modified" : "Published";
  const date = publishedAt
    ? `${dateLabel}: ${formatDate(publishedAt, { separator: "hyphen" })}`
    : "";

  return !crumbs ? null : (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        {breadcrumbs.map((crumb, i) => {
          const label = crumb === root ? rootLabel : toSentenceCase(crumb);
          const isLast = i === breadcrumbs.length - 1;
          const isHome = i === 0;
          const href = isHome ? root : `/${crumbs.slice(0, i).join("/")}`;

          return (
            <Fragment key={i}>
              {isHome ? null : <>&nbsp;&gt;&nbsp;</>}
              {isLast ? (
                <span>
                  {label}
                  {isHome && " >"}
                </span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </Fragment>
          );
        })}
      </div>
      {publishedAt && (
        <time className={styles.date} dateTime={publishedAt}>
          {date}
        </time>
      )}
    </div>
  );
};
