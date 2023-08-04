import type { Post } from "@/graphql/cms";

type RichtextHeadingType = { label: string; href: string };

export type RichtextHeadingsType = {
  heading: RichtextHeadingType;
  subHeadings: { heading: RichtextHeadingType }[];
}[];

export type CategoryType = {
  title: string;
  slug: string;
};

export type GroupedPostType = {
  category: CategoryType;
  items: Post[];
};

export type NavigationType = (
  | {
      title: string;
      slug: string;
      list?: undefined;
    }
  | {
      title: string;
      slug: string;
      list: CategoryType[];
    }
)[];
