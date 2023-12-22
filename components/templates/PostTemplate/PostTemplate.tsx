"use client";

import type { PostTemplateProps } from "./types";
import { Header } from "./styles";
import { Actions } from "./components";
import { NavigableRichtext } from "@/components/organisms/NavigableRichtext";
import { Container, HorizontalSeparator, Text } from "@/components/atoms";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  if (!content.body) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Text size={9} as="h2" weight={600} css={{ marginBottom: "$11" }}>
          {content.title}
        </Text>
        <Actions
          id={content.sys.id}
          likes={content.likes}
          text={`Posted: ${content.date.split("T")[0]}`}
        />
      </Header>
      <HorizontalSeparator size="sm" />
      <NavigableRichtext content={content.body} />
      <HorizontalSeparator size="xl" />
      <Actions
        id={content.sys.id}
        likes={content.likes}
        text="Thanks for reading!"
      />
    </Container>
  );
};
