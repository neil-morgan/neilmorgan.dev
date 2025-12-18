import type { PageContentLinksFragment } from "@/app/_graphql/generated";

export type ComponentsProps = {
  id: string;
  __typename: NonNullable<
    PageContentLinksFragment["entries"]["block"][number]
  >["__typename"];
};
