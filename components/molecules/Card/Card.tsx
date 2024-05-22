"use client";

import { Header, ContentBody, ContentImage, Footer } from "./styles";
import type { CardProps } from "./types";
import { Text, TagList, AspectImage, ContentButton } from "@/components/atoms";

export const Card = ({
  heading,
  description,
  href,
  tags,
  image,
}: CardProps) => (
  <ContentButton href={href}>
    <ContentBody>
      <Header>
        {image && image.url && (
          <ContentImage>
            <AspectImage
              ratio={1}
              fit="cover"
              url={image.url}
              description={image.description}
              blurDataUrl={image.blurDataUrl}
            />
          </ContentImage>
        )}
        <Text size={4} weight={400} as="h3">
          {heading}
        </Text>
      </Header>
      {description && <Text as="p">{description}</Text>}
      {tags && tags?.length > 0 && (
        <Footer>
          <TagList list={tags} />
        </Footer>
      )}
    </ContentBody>
  </ContentButton>
);
