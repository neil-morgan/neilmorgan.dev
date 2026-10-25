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
import { PageHeader, Richtext } from "@/app/_components";
import { PageContentField } from "./Page";
import type { RichtextEntry } from "../Richtext/Richtext.types";

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

export const LivePageContent = ({
  pageData,
  embeddedEntries,
}: {
  pageData: PageContentBySlugQuery;
  embeddedEntries: RichtextEntry[];
}) => {
  const { page, inspectorProps } = useLivePage(pageData);
  if (!page?.content) return null;
  return (
    <PageContentField inspectorProps={inspectorProps({ fieldId: "content" })}>
      <Richtext
        json={page.content.json}
        links={page.content.links}
        entries={embeddedEntries}
      />
    </PageContentField>
  );
};
