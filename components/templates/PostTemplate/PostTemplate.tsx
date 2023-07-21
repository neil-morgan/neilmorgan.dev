"use client";

import type { PostTemplateProps } from "./types";
import {
  LikeButton,
  Heading,
  Paragraph,
  Container,
  Divider,
} from "@/components/atoms";
import { Richtext } from "@/components/molecules";
import { type PostBody } from "@/graphql/cms";
import {
  Aside,
  AsideFooter,
  AsideHeader,
  Body,
  Header,
  NavList,
  NavListItem,
} from "./styles";
import { Fragment } from "react";

export const PostTemplate = ({ content, headings }: PostTemplateProps) => (
  <Container>
    <Header>
      <Heading size="primary" css={{ marginTop: 0 }}>
        {content.title}
      </Heading>
      <Paragraph>{content.description}</Paragraph>
    </Header>

    <Divider size="xl" />

    <Body>
      <Richtext content={content?.body as PostBody} />
      <Aside>
        <AsideHeader>
          <Heading size="tertiary">POST CONTENTS</Heading>
        </AsideHeader>
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
        <AsideFooter>
          <LikeButton likes={content?.likes} id={content?.sys.id} />
        </AsideFooter>
      </Aside>
    </Body>
  </Container>
);
