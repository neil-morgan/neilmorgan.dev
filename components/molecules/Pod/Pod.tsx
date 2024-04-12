"use client";

import { useEffect, useRef, type RefObject } from "react";
import NextLink from "next/link";
import type { PodType } from "./types";
import { Wrapper, ImageWrapper } from "./styles";
import { AspectImage, Text } from "@/components/atoms";
import { useElementRefs } from "@/providers";

export const Pod = ({ image, heading, href }: PodType) => {
  const { elementRefs, addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(
    () => addElementRef(elementRef.current),
    [addElementRef, elementRefs],
  );

  return (
    <NextLink target="_blank" href={href as string} passHref legacyBehavior>
      <Wrapper ref={elementRef as RefObject<HTMLAnchorElement>}>
        <ImageWrapper>
          <AspectImage
            ratio={1 / 1}
            url={image.url}
            description=""
            blurDataUrl={image.blurDataUrl}
          />
        </ImageWrapper>
        <Text>{heading}</Text>
      </Wrapper>
    </NextLink>
  );
};
