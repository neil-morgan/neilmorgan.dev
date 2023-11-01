"use client";

import { hasCookie } from "cookies-next";
// TODO! Investigate why this import is not working
import { NavigableRichtext } from "../../organisms/NavigableRichtext";
import type { PostTemplateProps } from "./types";
import { PostEdge } from "./styles";
import { Actions } from "./components";
import { Container, HorizontalSeparator, Text } from "@/components/atoms";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  const wasPreviouslyLiked = hasCookie(`nm-${content?.sys.id}`);

  //! needs a post like context provider to provide the liked state to both like buttons

  if (!content.body) {
    return null;
  }

  const PostActions = (
    <Actions
      id={content.sys.id}
      likes={content.likes}
      liked={wasPreviouslyLiked}
    />
  );

  return (
    <Container>
      <PostEdge>
        <Text size={9} weight="600" css={{ marginTop: 0 }}>
          {content.title}
        </Text>
        {PostActions}
      </PostEdge>

      <HorizontalSeparator size="xl" />
      <NavigableRichtext content={content.body} />
      <HorizontalSeparator size="xl" />

      <PostEdge as="footer">
        {PostActions}
        <Text size={5} color="primary">Thanks for reading!</Text>
      </PostEdge>
    </Container>
  );
};
