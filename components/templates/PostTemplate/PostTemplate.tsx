"use client";

import type { PostTemplateProps } from "./types";
import { Header } from "./styles";
import {
  LikeButton,
  Heading,
  Text,
  Container,
  HorizontalSeparator,
} from "@/components/atoms";
import { Richtext, NavigableContent } from "@/components/molecules";
import { type PostBody } from "@/graphql";

export const PostTemplate = ({ content, headings }: PostTemplateProps) => (
  <Container>
    <Header>
      <Heading size="h1" css={{ marginTop: 0 }}>
        {content.title}
      </Heading>
      <LikeButton likes={content?.likes} id={content?.sys.id} />
    </Header>

    <HorizontalSeparator size="xl" />

    <NavigableContent headings={headings}>
      <Text as="p">{content.description}</Text>
      <Richtext content={content?.body as PostBody} />
    </NavigableContent>
  </Container>
);
