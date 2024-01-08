"use client";

import { Fragment } from "react";
import { Wrapper, Header, Grid } from "./styles";
import { Container, Text, Separator } from "@/components/atoms";
import { Card } from "@/components/molecules";
import type { GroupedPostType } from "@/types";

export const PostsCategory = ({ category, items }: GroupedPostType) => (
  <Wrapper>
    <Header>
      <Text size={6} as="h2" weight={600} appearance="print" id="foo">
        {category?.title}
      </Text>
      <Text size={3}>
        {items.length} Post{items.length !== 1 && "s"}
      </Text>
    </Header>

    <Grid>
      {items.map(({ title, description, slug }, i) =>
        title && description && slug ? (
          <Card
            key={i}
            heading={title}
            description={description}
            href={`/posts/${category?.slug}/${slug}`}
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
