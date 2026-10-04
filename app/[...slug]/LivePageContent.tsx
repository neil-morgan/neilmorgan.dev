"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const updatedPageData = useContentfulLiveUpdates(pageData, {
    query: pageContentQuery,
    locale: "en-US",
  });
  const page = updatedPageData?.pageCollection?.items[0];
  const hasUpdatedData =
    JSON.stringify(updatedPageData) !== JSON.stringify(pageData);

  const inspectorProps = useContentfulInspectorMode({
    entryId: page?.sys.id,
    locale: "en-US",
  });

  useEffect(() => {
    if (hasUpdatedData) router.refresh();
  }, [hasUpdatedData, router]);

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
