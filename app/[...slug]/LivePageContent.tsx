"use client";

import type { ReactNode } from "react";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { parse } from "graphql";
import {
  PageContentBySlugDocument,
  type PageContentBySlugQuery,
} from "@/app/_graphql/generated";
import { PageHeader } from "@/app/_components";
import styles from "./LivePageContent.module.css";

const pageContentQuery = parse(PageContentBySlugDocument.toString());

type LivePageContentProps = {
  children: ReactNode;
  pageData: PageContentBySlugQuery;
  slug: string[];
};

export const LivePageContent = ({
  children,
  pageData,
  slug,
}: LivePageContentProps) => {
  const updatedPageData = useContentfulLiveUpdates(pageData, {
    query: pageContentQuery,
    locale: "en-US",
  });
  const page = updatedPageData?.pageCollection?.items[0];

  const inspectorProps = useContentfulInspectorMode({
    entryId: page?.sys.id,
    locale: "en-US",
  });

  if (!page || !inspectorProps) return null;

  return (
    <>
      <PageHeader page={page} slug={slug} inspectorProps={inspectorProps} />
      {children && (
        <div
          className={styles.contentField}
          {...inspectorProps({ fieldId: "content" })}
        >
          {children}
        </div>
      )}
    </>
  );
};
