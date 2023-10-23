import type { Post, Skill } from "@/graphql";

type NavigableContentHeadingType = { label: string; href: string };

export type NavigableContentHeadingsType = {
  heading: NavigableContentHeadingType;
  subHeadings: { heading: NavigableContentHeadingType }[];
}[];

export type CategoryType = {
  title: string;
  slug: string;
};

export type ProficiencyType = {
  title: string;
};

export type CategoryConstraintType<T extends CategoryType> = {
  category: T;
  [key: string]: any;
};

export type ProficiencyConstraintType<T extends ProficiencyType> = {
  category: T;
  [key: string]: any;
};

export type GroupedByCategoryType<T extends CategoryConstraintType<any>> = {
  category: T["category"];
  items: T[];
};

export type GroupedByProficiencyType<T> = {
  proficiency: string;
  items: T[];
};

export type GroupedPostType = GroupedByCategoryType<Post>;

export type GroupedSkillType = {
  category: CategoryType;
  items: GroupedByProficiencyType<Skill>[];
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
