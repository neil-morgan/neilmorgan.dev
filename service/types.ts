import type { RefObject } from "react";
import type { Scalars, Maybe, Asset, Entry, ResourceLink } from "@/service";

type WithoutDollarSign<T> = T extends `$${infer Rest}` ? Rest : T;

export type ImagesMap = { [title: string]: string };

export type ImageType = {
  url: string;
  description: string;
  blurDataUrl?: string;
};

export type CategoryItemType = {
  title: string | null;
  slug?: string | null;
};

export type GroupedCategoryType<T> = {
  category?: CategoryItemType;
  items: T[];
};

export type TagType = {
  title: string;
  slug?: string;
};

export type BreadcrumbType = {
  label: string;
  slug?: string;
};

export type IconType =
  | "Angle"
  | "ArrowRight"
  | "ArrowTopRight"
  | "ArrowTopLeft"
  | "ChevronDown"
  | "ChevronRight"
  | "Code"
  | "Copy"
  | "Checkmark"
  | "Cross"
  | "Cube"
  | "Dimensions"
  | "Github"
  | "Globe"
  | "Hamburger"
  | "Heart"
  | "HeartFilled"
  | "Info"
  | "Layers"
  | "Lightning"
  | "Link"
  | "LinkedIn"
  | "PaintDrop"
  | "Person"
  | "Rocket"
  | "Share"
  | "Star"
  | "Quote";

export type NavigationType = (
  | {
      label: string;
      slug: string;
      options?: undefined;
    }
  | {
      label: string;
      slug: string;
      options: {
        label: string;
        slug: string;
      }[];
    }
)[];

export type CategoryMetaProps = {
  params: { category: string };
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
  links?: RichtextLinksType;
};

type NavigableContentHeadingType = { id: string; label: string; href: string };

export type NavigableContentHeadingsType = {
  heading: NavigableContentHeadingType;
  subHeadings: { heading: NavigableContentHeadingType }[];
}[];

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
  | "$borderPrimary"
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
