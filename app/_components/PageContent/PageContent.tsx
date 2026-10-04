"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { parse } from "graphql";
import {
  PageContentBySlugDocument,
  type PageContentBySlugQuery,
} from "@/app/_graphql/generated";
import {
  LiveRichtext,
  PageHeader,
  type RichtextLinksType,
} from "@/app/_components";
import type { LiveRichtextEntry } from "@/app/_components/Richtext/LiveRichtext";
import styles from "./PageContent.module.css";

const pageContentQuery = parse(PageContentBySlugDocument.toString());

type LivePageContentProps = {
  embeddedEntries: LiveRichtextEntry[];
  pageData: PageContentBySlugQuery;
  slug: string[];
};

export const PageContent = ({
  embeddedEntries,
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
      {page.content && (
        <div
          className={styles.contentField}
          {...inspectorProps({ fieldId: "content" })}
        >
          <LiveRichtext
            json={page.content.json}
            links={page.content.links as RichtextLinksType}
            entries={embeddedEntries}
          />
        </div>
      )}
    </>
  );
};
