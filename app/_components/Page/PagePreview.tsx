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
import { PageHeader } from "../PageHeader/PageHeader";
import { LiveRichtext } from "../Richtext/LiveRichtext";
import type { LiveRichtextEntry } from "../Richtext/Richtext.types";

const pageContentQuery = parse(PageContentBySlugDocument.toString());

const useLivePage = (pageData: PageContentBySlugQuery) => {
  const updatedPageData = useContentfulLiveUpdates(pageData, {
    query: pageContentQuery,
    locale: "en-US",
  });
  const page = updatedPageData?.pageCollection?.items[0];

  const inspectorProps = useContentfulInspectorMode({
    entryId: page?.sys.id,
    locale: "en-US",
  });

  return { page, inspectorProps };
};

export const LivePageHeader = ({
  pageData,
  slug,
}: {
  pageData: PageContentBySlugQuery;
  slug: string[];
}) => {
  const { page, inspectorProps } = useLivePage(pageData);
  if (!page) return null;
  return <PageHeader page={page} slug={slug} inspectorProps={inspectorProps} />;
};

export const LivePageRichtext = ({
  pageData,
  embeddedEntries,
  className,
}: {
  pageData: PageContentBySlugQuery;
  embeddedEntries: LiveRichtextEntry[];
  className?: string;
}) => {
  const { page, inspectorProps } = useLivePage(pageData);
  if (!page?.content) return null;

  return (
    <div className={className} {...inspectorProps({ fieldId: "content" })}>
      <LiveRichtext
        json={page.content.json}
        links={page.content.links}
        entries={embeddedEntries}
      />
    </div>
  );
};
