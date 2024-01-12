import type { RefObject } from "react";
import type {
  Post,
  Skill,
  Scalars,
  Maybe,
  Asset,
  Entry,
  ResourceLink,
} from "@/graphql";

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

export type TagType = {
  title: string;
  slug: string;
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

export type RichtextLinksType = {
  assets: { block: Array<Maybe<Asset>>; hyperlink: Array<Maybe<Asset>> };
  entries: {
    block: Array<Maybe<Entry>>;
    hyperlink: Array<Maybe<Entry>>;
    inline: Array<Maybe<Entry>>;
  };
  resources: { block: Array<ResourceLink> };
};

export type RichtextType = {
  json: Scalars["JSON"]["output"];
  links: RichtextLinksType;
};

export type LocalStorageLocations = "likes";

export type MousePositionType = number | null;

export type AnchorElementRefType =
  | ((instance: HTMLAnchorElement | null) => void)
  | RefObject<HTMLAnchorElement>
  | null
  | undefined;

export type ButtonElementRefType =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

export type DivElementRefType =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined;
