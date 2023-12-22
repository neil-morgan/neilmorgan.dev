"use client";

import { Fragment } from "react";
import { Aside, Content, Body, NavList, NavListItem } from "./styles";
import { buildRichtextHeadings } from "./helpers";
import { HorizontalSeparator, Text } from "@/components/atoms";
import { Richtext } from "@/components/molecules";
import type { RichtextType } from "@/types";

export const NavigableRichtext = ({ content }: { content: RichtextType }) => (
  <Body>
    <Content>
      <Richtext content={content} />
    </Content>
    <Aside>
      <Text size={4} appearance="print" weight={500}>
        CONTENTS
      </Text>
      <NavList>
        {buildRichtextHeadings(content.json.content).map(
          ({ heading, subHeadings }, i1) => (
            <Fragment key={`${heading.label}-${i1}`}>
              <NavListItem href={heading.href}>{heading.label}</NavListItem>
              {subHeadings.length > 0 && (
                <NavList>
                  {subHeadings.map(({ heading }, i2) => (
                    <NavListItem
                      key={`${heading.label}-${i2}`}
                      href={heading.href}
                      size="subHeading">
                      {heading.label}
                    </NavListItem>
                  ))}
                </NavList>
              )}
            </Fragment>
          ),
        )}
      </NavList>
    </Aside>
  </Body>
);
