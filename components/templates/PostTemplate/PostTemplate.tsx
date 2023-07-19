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
import { PostHeader, PostAside, PostWrapper, HeadingsWrapper } from "./styles";
import { Fragment } from "react";

export const PostTemplate = ({ content, headings }: PostTemplateProps) => {
  console.log(headings);
  return (
    <Container>
      <PostHeader>
        <Heading as="h1">{content.title}</Heading>
        <Paragraph>{content.description}</Paragraph>
      </PostHeader>

      <Divider size="xl" />

      <PostWrapper>
        <Richtext content={content?.body as PostBody} />
        <PostAside>
          <HeadingsWrapper>
            {headings.map(({ heading, subHeadings }) => (
              <Fragment key={heading}>
                <a href={heading}>{heading}</a>
                {subHeadings.length > 0 && (
                  <HeadingsWrapper>
                    {subHeadings.map(({ heading }) => (
                      <a key={heading} href={heading}>
                        {heading}
                      </a>
                    ))}
                  </HeadingsWrapper>
                )}
              </Fragment>
            ))}
          </HeadingsWrapper>
          <LikeButton likes={content?.likes} id={content?.sys.id} />
        </PostAside>
      </PostWrapper>
    </Container>
  );
};
