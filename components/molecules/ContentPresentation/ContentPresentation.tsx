"use client";

import type { ContentPresentationProps } from "./types";
import { ContentDetails, ContentWrapper } from "./styles";
import { Text, Button, AspectImage, TagList } from "@/components/atoms";
import { formatDate } from "@/utils/format-date";

export const ContentPresentation = ({
  title,
  kicker,
  date,
  body,
  cta,
  image,
  reverse,
  tags,
}: ContentPresentationProps) => (
  <ContentWrapper>
    {image?.url && image?.description && (
      <AspectImage
        url={image.url}
        fit="cover"
        description={image.description}
        blurDataUrl={image.blurDataUrl}
      />
    )}
    <ContentDetails reverse={reverse}>
      {kicker && (
        <Text print size={2} as="h2" weight={600} color="$secondary1">
          {kicker}
        </Text>
      )}
      {date && (
        <Text size={0} css={{ marginTop: "$1" }}>
          {date}
        </Text>
      )}
      <Text
        size={5}
        as="h3"
        weight={400}
        color="$white"
        css={{ margin: "$4 0" }}>
        {title}
      </Text>
      <Text as="p">{body}</Text>
      {tags && tags.length > 0 && (
        <TagList list={tags} css={{ marginTop: "$5" }} />
      )}
      <Button
        href={cta.href}
        css={{ marginTop: "$6" }}
        rightIcon="ChevronRight">
        {cta.label}
      </Button>
    </ContentDetails>
  </ContentWrapper>
);
