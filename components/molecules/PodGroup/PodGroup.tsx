"use client";

import { Pod } from "../Pod";
import { Wrapper, Header, Row } from "./styles";
import type { PodGroupType } from "./types";
import { Text } from "@/components/atoms";

export const PodGroup = ({
  heading,
  plural,
  items,
  base64Map,
}: PodGroupType) => (
  <Wrapper>
    <Header>
      <Text size={2} as="h2" weight={600} print>
        {heading}
      </Text>
      <Text size={2} color="$secondary1">
        {items.length} {plural || "Item"}
        {items.length !== 1 && "s"}
      </Text>
    </Header>
    <Row>
      {items.map(({ title, slug, icon }, i) =>
        title && icon?.url && icon.description && icon.title ? (
          <Pod
            key={i}
            heading={title}
            href={`/skills/${slug}`}
            image={{
              url: icon.url,
              description: icon.description,
              blurDataUrl: base64Map[icon.title],
            }}
          />
        ) : null,
      )}
    </Row>
  </Wrapper>
);
