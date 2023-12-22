"use client";

import Image from "next/image";
import NextLink from "next/link";
import { CardWrapper, CardBody } from "./styles";
import type { CardProps } from "./types";
import { Text, AspectRatio, ConditionalWrapper } from "@/components/atoms";

export const Card = ({
  heading,
  description,
  href,
  image,
  isLink,
}: CardProps) => {
  return (
    <ConditionalWrapper
      if={isLink}
      wrapWith={children => (
        <NextLink href={href as string}>{children}</NextLink>
      )}>
      <CardWrapper>
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
          <Text size={5} as="h3">
            {heading}
          </Text>
          <Text as="p">{description}</Text>
        </CardBody>
      </CardWrapper>
    </ConditionalWrapper>
  );
};
