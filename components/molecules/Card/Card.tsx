"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { CardWrapper, CardBody } from "./styles";
import type { CardProps } from "./types";
import {
  Button,
  Heading,
  Icon,
  Text,
  AspectRatio,
  ConditionalWrapper,
  HoverHighlight,
} from "@/components/atoms";

export const Card = ({
  heading,
  description,
  href,
  image,
  isLink,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ConditionalWrapper
      if={isLink}
      wrapWith={children => (
        <NextLink href={href as string}>{children}</NextLink>
      )}>
      <CardWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <AspectRatio
          ratio={4 / 5}
          css={{
            borderRadius: "$md",
            overflow: "hidden",
          }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </AspectRatio>

        <CardBody>
          <Heading size="h3">{heading}</Heading>
          <Text as="p">{description}</Text>
        </CardBody>
      </CardWrapper>
    </ConditionalWrapper>
  );
};
