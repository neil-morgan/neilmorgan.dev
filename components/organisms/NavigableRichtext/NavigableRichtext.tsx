"use client";

import { Fragment, useState } from "react";
import { Aside, Content, Body, List, ListItem } from "./styles";
import { buildRichtextHeadings } from "./helpers";
import { Richtext } from "@/components/molecules";
import { Icon } from "@/components/atoms";
import type { RichtextType } from "@/types";

export const NavigableRichtext = ({ content }: { content: RichtextType }) => {
  const [currentId, setCurrentId] = useState("");
  const currentIdIcon = <Icon name="ChevronRight" />;

  return (
    <Body>
      <Content>
        <Richtext content={content} setCurrentId={setCurrentId} />
      </Content>

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
                    {subHeadings.map(({ heading }, i2) => (
                      <ListItem key={`${heading.label}-${i2}`}>
                        {heading.id === currentId && currentIdIcon}
                        <a href={heading.href}>{heading.label}</a>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Fragment>
            ),
          )}
        </List>
      </Aside>
    </Body>
  );
};
