import { type ConditionalWrapperProps } from "./types";

export const ConditionalWrapper = ({
  if: condition,
  wrapWith: wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : <>{children}</>);
