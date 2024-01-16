"use client";

import { Wrapper, Header, Grid } from "./styles";
import { Container, Text } from "@/components/atoms";
import { Card } from "@/components/molecules";
import type { GroupedPostType, TagType } from "@/types";

export const PostsCategory = ({ category, items }: GroupedPostType) => (
  <Wrapper>
    <Header>
      <Text size={6} as="h2" weight={600} print>
        {category?.title}
      </Text>
      <Text size={3}>
        {items.length} Post{items.length !== 1 && "s"}
      </Text>
    </Header>

    <Grid>
      {items.map(({ title, description, slug, tagsCollection }, i) =>
        title && description && slug ? (
          <Card
            key={i}
            heading={title}
            description={description}
            href={`/posts/${category?.slug}/${slug}`}
            tags={tagsCollection?.items as TagType[]}
          />
        ) : null,
      )}
    </Grid>
  </Wrapper>
);

export const PostsTemplate = ({
  posts,
}: {
  posts: GroupedPostType | GroupedPostType[];
}) => (
  <Container>
    {Array.isArray(posts) ? (
      posts.map(({ category, items }, i) => (
        <PostsCategory
          key={category?.title}
          category={category}
          items={items}
        />
      ))
    ) : (
      <PostsCategory category={posts.category} items={posts.items} />
    )}
  </Container>
);
