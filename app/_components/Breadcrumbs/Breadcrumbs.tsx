import { Fragment } from "react";
import { toSentenceCase } from "@/app/_utils";
import { Link } from "@/app/_components";
import styles from "./Breadcrumbs.module.css";
import type { BreadcrumbsProps } from "./types";

export const Breadcrumbs = ({
  crumbs,
  root = "/",
  rootLabel = "Home",
}: BreadcrumbsProps) => {
  const breadcrumbs = [root, ...crumbs];
  return !crumbs ? null : (
    <div className={styles.container}>
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
  );
};
