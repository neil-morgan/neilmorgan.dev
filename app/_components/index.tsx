import type { ComponentsProps } from "@/app/_types";

import { SectionServer as Section } from "./Section";

const componentMap = {
  Section,
};

export const Components = ({ id, __typename, ...rest }: ComponentsProps) => {
  const Component = componentMap[__typename as keyof typeof componentMap];
  if (!Component) return null;
  return <Component id={id} {...rest} />;
};

export * from "./AspectImage";
export * from "./Breadcrumbs";
export * from "./Button";
export * from "./Card";
export * from "./CodeString";
export * from "./Feedback";
export * from "./Icon";
export * from "./IconButton";
export * from "./Link";
export * from "./MasonryGrid";
export * from "./NoticePage";
export * from "./PageHeader";
export * from "./PointerGlow";
export * from "./Popover";
export * from "./Richtext";
export * from "./Section";
export * from "./SiteFooter";
export * from "./SiteHeader";
export * from "./SiteLogo";
export * from "./SiteNavList";
export * from "./Skill";
export * from "./Spinner";
