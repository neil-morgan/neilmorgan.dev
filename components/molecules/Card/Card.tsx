"use client";

import { useEffect, useRef, type RefObject } from "react";
import NextLink from "next/link";
import { Wrapper, Header, Footer } from "./styles";
import type { CardProps } from "./types";
import { Text, Icon, Tag } from "@/components/atoms";
import { useElementRefs } from "@/providers";

export const Card = ({
  heading,
  description,
  href,
  subHeading,
  tags,
}: CardProps) => {
  const { elementRefs, addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(
    () => addElementRef(elementRef.current),
    [addElementRef, elementRefs],
  );

  return (
    <NextLink target="_blank" href={href as string} passHref legacyBehavior>
      <Wrapper
        ref={elementRef as RefObject<HTMLAnchorElement>}
        css={{
          position: "relative",
          overflow: "hidden",
          "&:before": {
            position: "absolute",
            content: '""',
            height: "100vh",
            width: "100vw",
          },
        }}>
        <Header>
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
        <Text as="p">{description}</Text>
        {tags && (
          <Footer>
            {tags.map(({ title }, i) => {
              return <Tag key={title + i}>{title}</Tag>;
            })}
          </Footer>
        )}
      </Wrapper>
    </NextLink>
  );
};
