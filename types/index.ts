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

type NavigableContentHeadingType = { id: string; label: string; href: string };

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

export type NavigationType = {
  title: string;
  slug: string;
  list: {
    options:
      | {
          title: string | null | undefined;
          slug: string;
        }[]
      | undefined;
  };
}[];

export type CategoryMetaProps = {
  params: { category: string };
};

export type PostParamsType = {
  params: { post: string; category: string };
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

export type ColorType =
  | "$white"
  | "$black"
  | "$layer1"
  | "$layer2"
  | "$layer3"
  | "$primary1"
  | "$primary2"
  | "$secondary1"
  | "$secondary2"
  | "$text"
  | "$border"
  | "$borderHover"
  | "$highlightHover";

// space: {
//   0: "0rem", // 0px
//   1: "0.25rem", // 4px
//   2: "0.5rem", // 8px
//   3: "0.75rem", // 12px
//   4: "1rem", // 16px
//   5: "1.5rem", // 24px
//   6: "2rem", // 32px
//   7: "2.5rem", // 40px
//   8: "3rem", // 48px
//   9: "3.5rem", // 56px
//   10: "4rem", // 64px
//   11: "6rem", // 96px
//   12: "8rem", // 128px
//   13: "16rem", // 256px
//   14: "24rem", // 384px
//   15: "32rem", // 512px
// },

export type GapType =
  | "$0"
  | "$1"
  | "$2"
  | "$3"
  | "$4"
  | "$5"
  | "$6"
  | "$7"
  | "$8"
  | "$9"
  | "$10"
  | "$11"
  | "$12"
  | "$13"
  | "$14"
  | "$15";
