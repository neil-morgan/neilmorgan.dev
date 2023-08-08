"use client";

import { Fragment } from "react";
import type { PostTemplateProps } from "./types";
import {
  Aside,
  AsideFooter,
  Content,
  Body,
  Header,
  NavList,
  NavListItem,
} from "./styles";
import {
  LikeButton,
  Heading,
  Text,
  Container,
  Divider,
} from "@/components/atoms";
import { Richtext } from "@/components/molecules";
import { type PostBody } from "@/graphql/cms";

export const PostTemplate = ({ content, headings }: PostTemplateProps) => (
  <Container>
    <Header>
      <Heading size="h1" css={{ marginTop: 0 }}>
        {content.title}
      </Heading>
    </Header>

    <Divider size="xl" />

    <Body>
      <Content>
        <Text as="p">{content.description}</Text>
        <Richtext content={content?.body as PostBody} />
      </Content>
      <Aside>
        <Heading size="h6" style="print">
          POST CONTENTS
        </Heading>
        <Divider />
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
