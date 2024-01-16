"use client";

import type { PostTemplateProps } from "./types";

import { NavigableRichtext } from "@/components/organisms/NavigableRichtext";
import { Separator, Container, Text } from "@/components/atoms";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content.body) {
    return null;
  }

  return (
    <Container>
      <Text size={8} as="h2" weight={600} color="$white">
        {content.title}
      </Text>
      <Separator size="lg" />
      <NavigableRichtext content={content.body} />
    </Container>
  );
};
