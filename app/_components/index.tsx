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

export * from "./Breadcrumbs";
export * from "./Button";
export * from "./CodeString";
export * from "./PageHeader";
export * from "./Icon";
export * from "./IconButton";
export * from "./Link";
export * from "./PointerGlow";
export * from "./Section";
export * from "./SiteFooter";
export * from "./SiteHeader";
export * from "./SiteLogo";
export * from "./Spinner";
export * from "./AspectImage";
export * from "./Card";
export * from "./MasonryGrid";
export * from "./Feedback";
export * from "./Skill";
export * from "./NoticePage";