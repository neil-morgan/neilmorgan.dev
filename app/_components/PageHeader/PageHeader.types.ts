import type { PageHeaderFragment } from "@/app/_graphql/generated";
import type { useContentfulInspectorMode } from "@contentful/live-preview/react";

export type PageHeaderProps = {
  slug: string[];
  page: PageHeaderFragment;
  inspectorProps?: ReturnType<typeof useContentfulInspectorMode>;
};
