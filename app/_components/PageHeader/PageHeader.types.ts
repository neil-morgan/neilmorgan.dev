import type { PageContentBySlugQuery } from "@/app/_graphql/generated";
import type { useContentfulInspectorMode } from "@contentful/live-preview/react";

type PageData = NonNullable<
  NonNullable<PageContentBySlugQuery["pageCollection"]>["items"][number]
>;

export type PageHeaderProps = {
  slug: string[];
  page: PageData;
  inspectorProps: ReturnType<typeof useContentfulInspectorMode>;
};
