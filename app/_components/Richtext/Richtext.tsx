import type { Typename } from "@/app/_types";
import { Components } from "@/app/_components";
import { renderRichtextDocument } from "./render-richtext-document";

import type { RichtextProps } from "./Richtext.types";

export const Richtext = ({ links, json, noPadding }: RichtextProps) => (
  <>
    {renderRichtextDocument({
      json,
      links,
      noPadding,
      renderEntry: (entry) => (
        <Components
          id={entry.sys.id}
          __typename={entry.__typename as Typename}
        />
      ),
    })}
  </>
);
