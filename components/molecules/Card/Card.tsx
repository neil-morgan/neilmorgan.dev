"use client";

import { useEffect, useRef, type RefObject } from "react";
import NextLink from "next/link";
import { Wrapper, Header, ContentBody, ContentImage, Footer } from "./styles";
import type { CardProps } from "./types";
import { Text, Icon, TagList, AspectImage } from "@/components/atoms";
import { useElementRefs } from "@/providers";

export const Card = ({
  heading,
  description,
  href,
  priority = "default",
  subHeading,
  tags,
  image,
}: CardProps) => {
  console.log(image);
  const { elementRefs, addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(
    () => addElementRef(elementRef.current),
    [addElementRef, elementRefs],
  );

  const borderColorMap = {
    default: "$border",
    primary: "$borderPrimary",
    secondary: "$secondary",
  };

  return (
    <NextLink target="_blank" href={href as string} passHref legacyBehavior>
      <Wrapper
        ref={elementRef as RefObject<HTMLAnchorElement>}
        css={{
          borderColor: borderColorMap[priority],
          position: "relative",
          overflow: "hidden",
          "&:before": {
            position: "absolute",
            content: '""',
            height: "100vh",
            width: "100vw",
          },
        }}>
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
            <Icon name="ArrowTopRight" css={{ flexShrink: 0 }} />
          </Header>
          {subHeading && (
            <Text as="span" size={0} weight={700} css={{ marginTop: "$3" }}>
              {subHeading}
            </Text>
          )}
          {description && <Text as="p">{description}</Text>}
          {tags && tags?.length > 0 && (
            <Footer>
              <TagList list={tags} />
            </Footer>
          )}
        </ContentBody>
      </Wrapper>
    </NextLink>
  );
};
