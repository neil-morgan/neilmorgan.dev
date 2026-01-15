import type { PageHeaderFragment } from "@/app/_graphql/generated";

export type PageParams = { params: Promise<{ slug: string[] }> };
export type PageHeaderType =
  | (PageHeaderFragment & {
      slug: string[];
    })
  | null;
