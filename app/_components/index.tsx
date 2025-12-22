import type { ComponentsProps } from "@/app/_types";

import { SectionServer as Section } from "./page/Section";

const componentMap = {
  Section,
};

export const Components = ({ id, __typename, ...rest }: ComponentsProps) => {
  const Component = componentMap[__typename as keyof typeof componentMap];
  if (!Component) return null;
  return <Component id={id} {...rest} />;
};

export * from "./common/AspectImage";
export * from "./common/Breadcrumbs";
export * from "./common/Button";
export * from "./common/Card";
export * from "./common/CodeString";
export * from "./common/Icon";
export * from "./common/IconButton";
export * from "./common/Link";
export * from "./common/MasonryGrid";
export * from "./common/Popover";
export * from "./common/Richtext";
export * from "./common/Spinner";
export * from "./content/Feedback";
export * from "./content/SellingPoint";
export * from "./content/Skill";
export * from "./page/PageHeader";
export * from "./page/Section";
export * from "./site/NoticePage";
export * from "./site/PointerGlow";
export * from "./site/SiteFooter";
export * from "./site/SiteHeader";
export * from "./site/SiteLogo";
export * from "./site/SiteNavList";
