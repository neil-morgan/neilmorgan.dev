"use client";

import { hasCookie } from "cookies-next";
// TODO! Investigate why this import is not working
import { LinkedinShareButton } from "react-share";
import { NavigableRichtext } from "../../organisms/NavigableRichtext";
import type { PostTemplateProps } from "./types";
import { Header, HeaderActions } from "./styles";
import {
  Container,
  HorizontalSeparator,
  Popover,
  Icon,
  IconButton,
  Text,
} from "@/components/atoms";
import { LikeButton } from "@/components/molecules";

export const PostTemplate = ({ content }: PostTemplateProps) => {
  const postWasPreviouslyLiked = hasCookie(`nm-${content?.sys.id}`);

  if (!content.body) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Text size={9} weight="600" css={{ marginTop: 0 }}>
          {content.title}
        </Text>
        <HeaderActions>
          <Popover trigger={<IconButton size="md" icon="Share" />}>
            <LinkedinShareButton url={"https://www.example.com"}>
              <Icon name="LinkedIn" />
            </LinkedinShareButton>
          </Popover>
          <LikeButton
            likes={content?.likes}
            id={content?.sys.id}
            liked={postWasPreviouslyLiked}
          />
        </HeaderActions>
      </Header>
      <HorizontalSeparator size="xl" />

      <NavigableRichtext content={content.body} />
    </Container>
  );
};
