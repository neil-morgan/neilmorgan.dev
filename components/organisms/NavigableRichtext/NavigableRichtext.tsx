"use client";

import { Fragment } from "react";
import { Aside, Content, Body, NavList, NavListItem } from "./styles";
import { buildRichtextHeadings } from "./helpers";
import { Richtext } from "@/components/molecules";
import { Button } from "@/components/atoms";
import type { RichtextType } from "@/types";

export const NavigableRichtext = ({ content }: { content: RichtextType }) => (
  <Body>
    <Content>
      <Richtext content={content} />
    </Content>

    <Aside>
      <NavList>
        {buildRichtextHeadings(content.json.content).map(
          ({ heading, subHeadings }, i1) => (
            <Fragment key={`${heading.label}-${i1}`}>
              <a href={heading.href}>{heading.label}</a>
              {subHeadings.length > 0 && (
                <NavList>
                  {subHeadings.map(({ heading }, i2) => (
                    <a key={`${heading.label}-${i2}`} href={heading.href}>
                      {heading.label}
                    </a>
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
