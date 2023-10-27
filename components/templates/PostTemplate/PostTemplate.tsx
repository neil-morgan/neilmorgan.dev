"use client";

import { hasCookie } from "cookies-next";
// TODO! Investigate why this import is not working
import { NavigableRichtext } from "../../organisms/NavigableRichtext";
import type { PostTemplateProps } from "./types";
import { Header } from "./styles";
import { Heading, Container, HorizontalSeparator } from "@/components/atoms";
import { LikeButton } from "@/components/molecules";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content.body) {
    return null;
  }

  const postWasPreviouslyLiked = hasCookie(`nm-${content?.sys.id}`);

  return (
    <Container>
      <Header>
        <Heading size="h1" css={{ marginTop: 0 }}>
          {content.title}
        </Heading>
        <LikeButton
          likes={content?.likes}
          id={content?.sys.id}
          liked={postWasPreviouslyLiked}
        />
      </Header>
      <HorizontalSeparator size="xl" />

      <NavigableRichtext content={content.body} />
    </Container>
  );
};
