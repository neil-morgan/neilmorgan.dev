import { type PageContentBySlugQuery } from "@/app/_graphql/generated";
import type { LiveRichtextEntry } from "@/app/_components/Richtext";

export type LivePageContentProps = {
  embeddedEntries: LiveRichtextEntry[];
  pageData: PageContentBySlugQuery;
  slug: string[];
};
