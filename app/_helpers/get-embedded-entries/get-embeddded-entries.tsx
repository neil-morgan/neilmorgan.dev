import type { PageContentBySlugQuery } from "@/app/_graphql/generated";
import type { Typename } from "@/app/_types";
import { Components } from "@/app/_components";

type PageData = NonNullable<
  NonNullable<PageContentBySlugQuery["pageCollection"]>["items"][number]
>;

export const getEmbeddedEntries = (page: PageData) =>
  [
    ...(page.content?.links.entries.block ?? []),
    ...(page.content?.links.entries.inline ?? []),
  ].flatMap((entry) => {
    if (!entry?.sys.id || !entry.__typename) return [];
    return [
      {
        id: entry.sys.id,
        node: (
          <Components
            id={entry.sys.id}
            __typename={entry.__typename as Typename}
          />
        ),
      },
    ];
  });
