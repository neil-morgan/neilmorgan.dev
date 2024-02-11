"use client";

import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import { Richtext } from "../Richtext";
import { Aside, Body, List, ListItem } from "./styles";
import { buildRichtextHeadings } from "./helpers";
import { CopyButton } from "@/components/molecules";
import { Icon } from "@/components/atoms";
import type { RichtextType } from "@/types";
import { SITE_BASE_URL } from "@/lib/site";

export const NavigableRichtext = ({ content }: { content: RichtextType }) => {
  const pathname = usePathname();
  const [currentId, setCurrentId] = useState("");
  const currentIdIcon = <Icon name="ChevronRight" />;

  return (
    <Body>
      <Richtext content={content} setCurrentId={setCurrentId} />

      <Aside>
        <List>
          {buildRichtextHeadings(content.json.content).map(
            ({ heading, subHeadings }, i1) => (
              <Fragment key={`${heading.label}-${i1}`}>
                {
                  <ListItem>
                    {heading.id === currentId && currentIdIcon}

                    <a href={heading.href}>{heading.label}</a>
                  </ListItem>
                }

                {subHeadings.length > 0 && (
                  <List>
                    {subHeadings.map(({ heading: subHeading }, i2) => (
                      <ListItem key={`${heading.label}-${i2}`}>
                        {subHeading.id === currentId && currentIdIcon}
                        <a href={subHeading.href}>{subHeading.label}</a>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Fragment>
            ),
          )}
        </List>

        <CopyButton
          size="sm"
          value={`${SITE_BASE_URL}${pathname}`}
          message="Url copied to clipboard"
        />
      </Aside>
    </Body>
  );
};
