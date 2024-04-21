"use client";

import { Wrapper, Header, Row } from "./styles";
import type { SkillsCategoryType } from "./types";
import { Pod } from "@/components/molecules";
import { Text } from "@/components/atoms";

export const SkillsCategory = ({
  category,
  items,
  base64Map,
}: SkillsCategoryType) => (
  <Wrapper>
    <Header>
      <Text size={2} as="h2" weight={600} print>
        {category?.title} Skills
      </Text>
      <Text size={2} color="$secondary1">
        {items.length} Skill{items.length !== 1 && "s"}
      </Text>
    </Header>
    <Row>
      {items.map(({ title, slug, icon }, i) =>
        title && icon?.title && icon?.url && slug && slug ? (
          <Pod
            key={i}
            heading={title}
            href={`/skills/${slug}`}
            image={{
              url: icon.url,
              description: "",
              blurDataUrl: base64Map[icon.title],
            }}
          />
        ) : null,
      )}
    </Row>
  </Wrapper>
);
