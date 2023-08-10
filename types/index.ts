import type { Post } from "@/graphql";

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

type NavigationOptionType = {
  icon?: string;
  description?: string;
} & CategoryType;

export type NavigationType = (
  | {
      title: string;
      slug: string;
      list?: undefined;
    }
  | {
      title: string;
      slug: string;
      list: {
        columns: "1" | "2";
        options: NavigationOptionType[];
      };
    }
)[];
