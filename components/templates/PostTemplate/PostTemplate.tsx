"use client";

import type { PostTemplateProps } from "./types";
import { Actions } from "./components";
import { NavigableRichtext } from "@/components/organisms/NavigableRichtext";
import { Container, Separator, Text } from "@/components/atoms";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content.body) {
    return null;
  }

  return (
    <Container>
      <Text
        size={9}
        as="h2"
        weight={600}
        css={{ marginBottom: "$11" }}
        color="$white">
        {content.title}
      </Text>
      <NavigableRichtext content={content.body} />
      <Separator size="xl" />
      <Actions text="Thanks for reading!" />
    </Container>
  );
};
