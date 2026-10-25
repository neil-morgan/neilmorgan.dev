import type { PropsWithChildren } from "react";
import type { PageFragment } from "@/app/_graphql/generated";
import { combineClassNames } from "@/app/_utils";
import { type RichtextEntry, Richtext } from "@/app/_components";
import styles from "./Page.module.css";
import type { InspectorModeTags } from "@contentful/live-preview";

export const Page = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={combineClassNames(styles.container, className)}>
    {children}
  </div>
);

export const PageContentField = ({
  children,
  inspectorProps,
}: PropsWithChildren<{
  inspectorProps?: InspectorModeTags;
}>) => (
  <div className={styles.contentField} {...inspectorProps}>
    {children}
  </div>
);

export const PageContent = ({
  embeddedEntries,
  ...props
}: PageFragment & { embeddedEntries: RichtextEntry[] }) => (
  <PageContentField>
    <Richtext
      json={props.content?.json}
      links={props.content?.links}
      entries={embeddedEntries}
    />
  </PageContentField>
);
