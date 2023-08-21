import type { Post, SkillCategory, Skill } from "@/graphql";

type RichtextHeadingType = { label: string; href: string };

export type RichtextHeadingsType = {
  heading: RichtextHeadingType;
  subHeadings: { heading: RichtextHeadingType }[];
}[];

export type CategoryType = {
  title: string;
  slug: string;
};

export type ItemType<T extends CategoryType> = {
  category: T;
  [key: string]: any;
};

export type GroupedByCategoryType<T extends ItemType<any>> = {
  category: T["category"];
  items: T[];
};

export type GroupedByProficiencyType = {
  title: string;
  items: Skill[];
};

export type GroupedPostType = GroupedByCategoryType<Post>;
export type GroupedSkillType = {
  category: SkillCategory;
  items: GroupedByProficiencyType[];
};

type NavigationOptionType = {
  icon?: string;
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
        options: NavigationOptionType[];
      };
    }
)[];

export type CategoryMetaProps = {
  params: { category: string };
};

export type SlugMetaProps = {
  params: { slug: string; category: string };
};

export type SlugProps = {
  params: { slug: string };
};
