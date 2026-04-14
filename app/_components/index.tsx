import type { ComponentsProps } from "@/app/_types";

import { Section } from "./Section";

const componentMap = {
  Section,
};

export const Components = ({ id, __typename, ...rest }: ComponentsProps) => {
  const Component = componentMap[__typename as keyof typeof componentMap];
  if (!Component) return null;
  return <Component id={id} {...rest} />;
};

export * from "./AspectImage";
export * from "./BackgroundSlice";
export * from "./Breadcrumbs";
export * from "./Button";
export * from "./Card";
export * from "./CodeString";
export * from "./Experience";
export * from "./Feedback";
export * from "./Footer";
export * from "./Icon";
export * from "./IconButton";
export * from "./Interaction";
export * from "./Link";
export * from "./MasonryGrid";
export * from "./PageHeader";
export * from "./Projects";
export * from "./Richtext";
export * from "./Section";
export * from "./Skills";
export * from "./Spinner";
export * from "./Spread";
export * from "./Tag";