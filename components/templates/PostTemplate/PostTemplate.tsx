"use client";

import type { PostTemplateProps } from "./types";
import { Header } from "./styles";
import {
  LikeButton,
  Heading,
  Container,
  HorizontalSeparator,
} from "@/components/atoms";
import { NavigableRichtext } from "@/components/organisms";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content.body) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Heading size="h1" css={{ marginTop: 0 }}>
          {content.title}
        </Heading>
        <LikeButton likes={content?.likes} id={content?.sys.id} />
      </Header>
      <HorizontalSeparator size="xl" />
      <NavigableRichtext content={content.body} />z
    </Container>
  );
};
