"use client";

import { useEffect, useRef, type RefObject } from "react";
import NextLink from "next/link";
import { CardWrapper } from "./styles";
import type { CardProps } from "./types";
import { Text } from "@/components/atoms";
import { useElementRefs } from "@/providers";

export const Card = ({ heading, description, href }: CardProps) => {
  const { elementRefs, addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(
    () => addElementRef(elementRef.current),
    [addElementRef, elementRefs],
  );

  return (
    <NextLink target="_blank" href={href as string} passHref legacyBehavior>
      <CardWrapper
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
        <Text size={4} as="h3" css={{ marginBottom: "$3" }}>
          {heading}
        </Text>
        <Text size={1} weight={200}>
          date
        </Text>
        <Text as="p">{description}</Text>
      </CardWrapper>
    </NextLink>
  );
};
