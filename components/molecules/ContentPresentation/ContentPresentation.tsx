"use client";

import type { ContentPresentationProps } from "./types";
import { ContentDetails, ContentWrapper, ContentHeader } from "./styles";
import { Text, Button, AspectImage, Tag, TagList } from "@/components/atoms";
import type { TagType } from "@/service";

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
      <ContentHeader>
        <Text print size={1} weight={600}>
          {label}
        </Text>
        {tags?.items && <TagList list={tags?.items as TagType[]} />}
      </ContentHeader>

      <Text size={5} as="h3" weight={400} color="$white">
        {title}
      </Text>
      <Text as="p">{body}</Text>
      <Button href={cta.href} css={{ marginTop: "$2" }}>
        {cta.label}
      </Button>
    </ContentDetails>
  </ContentWrapper>
);
