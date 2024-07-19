"use client";

import type { PodType } from "./types";
import { ImageWrapper } from "./styles";
import { AspectImage, Text, ContentButton } from "@/components/atoms";

export const Pod = ({ image, heading, href }: PodType) => (
  <ContentButton href={href}>
    <ImageWrapper>
      <AspectImage
        ratio={1 / 1}
        url={image.url}
        description=""
        blurDataUrl={image.blurDataUrl}
      />
    </ImageWrapper>
    <Text textAlign="center">{heading}</Text>
  </ContentButton>
);
