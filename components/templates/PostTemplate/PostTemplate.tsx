"use client";

import type { PostTemplateProps } from "./types";
import { PostFooter } from "./styles";
import { NavigableRichtext } from "@/components/organisms/NavigableRichtext/NavigableRichtext";
import { Separator, Text, Container } from "@/components/atoms";

export const PostTemplate = ({ content, base64Map }: PostTemplateProps) => (
  <Container>
    <Text size={8} as="h2" weight={600} color="$white">
      {content.title}
    </Text>
    <Text size={4} as="p" weight={400}>
      {content.description}
    </Text>
    <Separator size="xl" />

    {content?.body && content?.image && (
      <NavigableRichtext
        content={content.body}
        base64Map={base64Map}
        image={content.image}
      />
    )}

    <PostFooter>
      <Text size={5} as="div" color="$secondary1">
        Thanks for reading!
      </Text>
    </PostFooter>
  </Container>
);
