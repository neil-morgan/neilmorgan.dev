import type { ComponentsProps } from "@/app/_types";

import { Section } from "./Section";

export const Components = ({ id, __typename, ...rest }: ComponentsProps) => {
  const componentMap = {
    Section,
  };
  const Component = componentMap[__typename as keyof typeof componentMap];
  if (!Component) return null;
  return <Component id={id} {...rest} />;
};

export * from "./AspectImage";
export * from "./Box";
export * from "./Breadcrumbs";
export * from "./Button";
export * from "./Card";
export * from "./CodeString";
export * from "./Experience";
export * from "./Feedback";
export * from "./Icon";
export * from "./IconButton";
export * from "./Interaction";
export * from "./Layout";
export * from "./Link";
export * from "./MasonryGrid";
export * from "./Page";
export * from "./PageHeader";
export * from "./PreviewMode";
export * from "./Richtext";
export * from "./Section";
export * from "./Skeleton";
export * from "./Skill";
export * from "./Spinner";
export * from "./Tag";
