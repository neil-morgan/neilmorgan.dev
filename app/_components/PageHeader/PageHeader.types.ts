import type { PageHeaderFragment } from "@/app/_graphql";

export type PageHeaderProps = PageHeaderFragment & {
  slug: string[];
};
