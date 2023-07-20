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
  HeadingLink,
  HeadingsWrapper,
  PostAside,
  PostAsideFooter,
  PostAsideHeader,
  PostHeader,
  PostWrapper,
} from "./styles";
import { Fragment } from "react";

export const PostTemplate = ({ content, headings }: PostTemplateProps) => {
  return (
    <Container>
      <PostHeader>
        <Heading as="h1" css={{ marginTop: 0 }}>
          {content.title}
        </Heading>
        <Paragraph>{content.description}</Paragraph>
      </PostHeader>

      <Divider size="xl" />

      <PostWrapper>
        <Richtext content={content?.body as PostBody} />
        <PostAside>
          <PostAsideHeader>
            <Heading as="h5">CONTENTS</Heading>
          </PostAsideHeader>
          <HeadingsWrapper>
            {headings.map(({ heading, subHeadings }, i1) => (
              <Fragment key={`${heading.label}-${i1}`}>
                <HeadingLink href={heading.href}>{heading.label}</HeadingLink>
                {subHeadings.length > 0 && (
                  <HeadingsWrapper>
                    {subHeadings.map(({ heading }, i2) => (
                      <HeadingLink
                        key={`${heading.label}-${i2}`}
                        href={heading.href}
                        size="subHeading">
                        {heading.label}
                      </HeadingLink>
                    ))}
                  </HeadingsWrapper>
                )}
              </Fragment>
            ))}
          </HeadingsWrapper>
          <PostAsideFooter>
            <LikeButton likes={content?.likes} id={content?.sys.id} />
          </PostAsideFooter>
        </PostAside>
      </PostWrapper>
    </Container>
  );
};
