"use client";

import type { ContentPresentationProps } from "./types";
import { ContentDetails, ContentWrapper, ContentFooter } from "./styles";
import { Text, Button, AspectImage, TagList } from "@/components/atoms";

export const ContentPresentation = ({
  title,
  label,
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
      {label && (
        <Text print size={1} weight={600}>
          {label}
        </Text>
      )}
      <Text size={5} as="h3" weight={400} color="$white">
        {title}
      </Text>
      <Text as="p">{body}</Text>
      <ContentFooter>
        <Button href={cta.href}>{cta.label}</Button>
        {tags && <TagList list={tags} />}
      </ContentFooter>
    </ContentDetails>
  </ContentWrapper>
);
