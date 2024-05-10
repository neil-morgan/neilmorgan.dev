"use client";

import type { ContentPresentationProps } from "./types";
import { ContentDetails, ContentWrapper } from "./styles";
import { Text, Button, AspectImage, TagList } from "@/components/atoms";

export const ContentPresentation = ({
  title,
  kicker,
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
        <Text print size={0} weight={600} color="$secondary1">
          {kicker}
        </Text>
      )}
      <Text size={5} as="h3" weight={400} color="$white">
        {title}
      </Text>
      <Text as="p">{body}</Text>
      {tags && tags.length > 0 && <TagList list={tags} />}
      <Button
        href={cta.href}
        css={{ marginTop: "$4" }}
        rightIcon="ChevronRight">
        {cta.label}
      </Button>
    </ContentDetails>
  </ContentWrapper>
);
