import type { Typename } from "@/app/_types";
import { Components } from "@/app/_components";
import type { RichtextLinksType } from "@/app/_components/Richtext/Richtext.types";

export const getEmbeddedEntries = (
  entries: RichtextLinksType["entries"] | undefined,
) =>
  [...(entries?.block ?? []), ...(entries?.inline ?? [])].flatMap((entry) => {
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
