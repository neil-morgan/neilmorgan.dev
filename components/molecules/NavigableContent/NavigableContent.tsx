"use client";

import { Fragment } from "react";
import { Aside, Content, Body, NavList, NavListItem } from "./styles";
import { Heading, HorizontalSeparator } from "@/components/atoms";
import type { NavigableContentHeadingsType } from "@/types";

export const NavigableContent = ({
  children,
  headings,
}: React.PropsWithChildren<{ headings: NavigableContentHeadingsType }>) => (
  <Body>
    <Content>{children}</Content>
    <Aside>
      <Heading size="h6" style="print">
        CONTENTS
      </Heading>
      <HorizontalSeparator size="sm" />
      <NavList>
        {headings.map(({ heading, subHeadings }, i1) => (
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
        ))}
      </NavList>
    </Aside>
  </Body>
);
