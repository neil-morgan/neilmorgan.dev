"use client";

import { Wrapper, Header, Grid } from "./styles";
import type { PostsCategoryType } from "./types";
import { Card } from "@/components/molecules";
import { Text } from "@/components/atoms";
import type { TagType } from "@/service";
import { LOCATIONS } from "@/lib/site";

export const PostsCategory = ({
  category,
  items,
  base64Map,
}: PostsCategoryType) => (
  <Wrapper>
    <Header>
      <Text size={2} as="h2" weight={600} print>
        {category?.title}
      </Text>
      <Text size={2} color="$secondary1">
        {items.length} Post{items.length !== 1 && "s"}
      </Text>
    </Header>
    <Grid>
      {items.map(({ title, description, slug, image, tagsCollection }, i) =>
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
            href={`${LOCATIONS.posts.slug}/${category?.slug}/${slug}`}
            tags={tagsCollection?.items as TagType[]}
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
