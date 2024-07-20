"use client";

import { Card } from "../Card";
import { Wrapper, Header, Grid } from "./styles";
import type { CardGroupProps } from "./types";
import { Text } from "@/components/atoms";

export const CardGroup = ({
  heading,
  items,
  base64Map,
  showCount,
}: CardGroupProps) => (
  <Wrapper>
    <Header>
      <Text size={2} as="h2" weight={600} print>
        {heading}
      </Text>
      {showCount && (
        <Text size={2} color="$secondary1">
          {items?.length} Item{items?.length !== 1 && "s"}
        </Text>
      )}
    </Header>
    <Grid>
      {items?.map(({ title, description, slug, date, image, tags }, i) =>
        title &&
        description &&
        image?.title &&
        image?.url &&
        image.description &&
        slug ? (
          <Card
            key={i}
            heading={title}
            description={description}
            href={slug}
            date={date}
            tags={tags}
            image={{
              url: image.url,
              description: image.description,
              blurDataUrl: base64Map[image.title],
            }}
          />
        ) : null,
      )}
    </Grid>
  </Wrapper>
);
