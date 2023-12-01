"use client";

import type { PostTemplateProps } from "./types";
import { PostEdge } from "./styles";
import { Actions } from "./components";
import { NavigableRichtext } from "@/components/organisms/NavigableRichtext";
import { Container, HorizontalSeparator, Text } from "@/components/atoms";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content.body) {
    return null;
  }

  const actions = <Actions id={content.sys.id} likes={content.likes} />;

  return (
    <Container>
      <PostEdge>
        <Text size={9} weight="600" css={{ marginTop: 0 }}>
          {content.title}
        </Text>
        {actions}
      </PostEdge>

      <HorizontalSeparator size="xl" />
      <NavigableRichtext content={content.body} />
      <HorizontalSeparator size="xl" />

      <PostEdge as="footer">
        {/* {actions} */}
        <Text size={5} color="secondary">
          Thanks for reading!
        </Text>
      </PostEdge>
    </Container>
  );
};
