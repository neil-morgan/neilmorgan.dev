import type { Post } from "@/graphql/cms";

type RichtextHeadingType = { label: string; href: string };

export type RichtextHeadingsType = {
  heading: RichtextHeadingType;
  subHeadings: { heading: RichtextHeadingType }[];
}[];

export type GroupedPostType = {
  category: string;
  items: Post[];
};
