import type { PropsWithChildren } from "react";
import type { PageFragment } from "@/app/_graphql/generated";
import { combineClassNames } from "@/app/_utils";
import { Richtext } from "@/app/_components";
import styles from "./Page.module.css";

export const Page = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={combineClassNames(styles.container, className)}>
    {children}
  </div>
);

export const PageContent = (props: PageFragment) => (
  <div className={styles.contentField}>
    <Richtext json={props.content?.json} links={props.content?.links} />
  </div>
);
