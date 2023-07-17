"use client";

import type { PostTemplateProps } from "./types";
import { LikeButton, Heading, Paragraph, Container } from "@/components/atoms";
import { Richtext } from "@/components/molecules";
import { type PostBody } from "@/graphql/cms";
import { PostContent } from "./styles";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  return (
    <Container>
      <LikeButton likes={content?.likes} id={content?.sys.id} />
      <PostContent>
        <Heading as="h1" id="asd">
          Normal heading
        </Heading>
        <Paragraph>body text</Paragraph>
        <Richtext content={content?.body as PostBody} />
      </PostContent>
    </Container>
  );
};
