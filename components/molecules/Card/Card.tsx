"use client";

import Image from "next/image";
import { CardWrapper, CardBody, CardFooter } from "./styles";
import type { CardProps } from "./types";
import {
  Text,
  AspectRatio,
  HorizontalSeparator,
  Button,
} from "@/components/atoms";
import { CopyButton } from "@/components/molecules";

export const Card = ({ heading, description, image, cta }: CardProps) => (
  <CardWrapper>
    <AspectRatio
      ratio={1 / 0.618}
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
      <Text size={5} as="h3" css={{ marginBottom: "$3" }}>
        {heading}
      </Text>
      <Text size={1} weight={200}>
        date
      </Text>
      <Text as="p">{description}</Text>
    </CardBody>
    <HorizontalSeparator size="sm" />
    <CardFooter>
      <CopyButton
        asIcon
        value="https://www.google.com/"
        message="Url copied to clipboard"
      />
      <Button
        href={cta.href}
        size="sm"
        rightIcon="ArrowRight"
        priority="primary">
        {cta.label || "Read more"}
      </Button>
    </CardFooter>
  </CardWrapper>
);
