export type ConditionalWrapperProps = {
  children: React.ReactNode;
  if?: boolean;
  wrapWith: (children: React.ReactNode) => JSX.Element;
};
