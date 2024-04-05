import type { RefObject } from "react";
import type {
  Post,
  Skill,
  Scalars,
  Maybe,
  Asset,
  Entry,
  ResourceLink,
} from "@/service";

type WithoutDollarSign<T> = T extends `$${infer Rest}` ? Rest : T;

export type ImagesMap = { [title: string]: string };

export type CategoryType = {
  title: string;
  slug: string;
};

export type ProficiencyType = {
  title: string;
};

export type TagType = {
  title: string;
  slug?: string;
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
        options: {
          title: string;
          slug: string;
        }[];
      };
    }
)[];

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

export type CorrectedColorType = WithoutDollarSign<ColorType>;

export type SpacingOptionsType =
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

export type GapOptionsType =
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
