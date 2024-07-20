"use client";

import { Header, ContentBody, ContentImage, Footer } from "./styles";
import type { CardProps } from "./types";
import { Text, TagList, AspectImage, ContentButton } from "@/components/atoms";
import { formatDate } from "@/utils";

export const Card = ({
  heading,
  description,
  href,
  tags,
  date,
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
      {!tags && !date ? null : (
        <Footer>
          {date && (
            <Text size={1} weight={600} color="$secondary1">
              {formatDate(date)}
            </Text>
          )}
          {tags && tags?.length > 0 && <TagList list={tags} />}
        </Footer>
      )}
    </ContentBody>
  </ContentButton>
);
