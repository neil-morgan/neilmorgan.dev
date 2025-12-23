import type { ConditionalWrapperProps } from "./ConditionalWrapper.types";

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => {
  return condition ? wrapper(children) : children;
};
