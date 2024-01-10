"use client";

import { usePathname } from "next/navigation";
import type { PostTemplateProps } from "./types";
import { PostFooter } from "./styles";
import { NavigableRichtext } from "@/components/organisms/NavigableRichtext";
import { Container, Separator, Text } from "@/components/atoms";
import { CopyButton } from "@/components/molecules";
import { SITE_BASE_URL } from "@/lib/site";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  const pathname = usePathname();

  if (!content.body) {
    return null;
  }

  return (
    <Container>
      <Text
        size={8}
        as="h2"
        weight={600}
        css={{ marginBottom: "$11" }}
        color="$white">
        {content.title}
      </Text>
      <NavigableRichtext content={content.body} />
      <Separator size="xl" />
      <PostFooter>
        <CopyButton
          value={`${SITE_BASE_URL}${pathname}`}
          message="Url copied to clipboard"
        />
        <Text size={1} weight={300} as="span" color="$text">
          Thanks for reading!
        </Text>
      </PostFooter>
    </Container>
  );
};
