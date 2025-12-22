import { Fragment } from "react";

import { Link } from "@/app/_components";
import { toSentenceCase } from "@/app/_utils";

import styles from "./styles.module.css";

import type { BreadcrumbsProps } from "./types";

export const Breadcrumbs = ({
  crumbs,
  root = "/",
  rootLabel = "Home",
}: BreadcrumbsProps) => {
  const breadcrumbs = [root, ...crumbs];
  return !crumbs || crumbs.length === 0 ? null : (
    <div className={styles.container}>
      {breadcrumbs.map((crumb, i) => {
        const label = crumb === root ? rootLabel : toSentenceCase(crumb);
        const isLast = i === breadcrumbs.length - 1;
        const href = i === 0 ? root : `/${crumbs.slice(0, i).join("/")}`;
        return (
          <Fragment key={i}>
            {i === 0 ? null : <>&nbsp;&gt;&nbsp;</>}
            {isLast ? <p>{label}</p> : <Link href={href}>{label}</Link>}
          </Fragment>
        );
      })}
    </div>
  );
};
