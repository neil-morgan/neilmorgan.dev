"use client";

import { Fragment } from "react";
import { Wrapper, Header, Grid } from "./styles";
import { Container, Text, HorizontalSeparator } from "@/components/atoms";
import { Card } from "@/components/molecules";
import type { GroupedPostType } from "@/types";

export const PostsCategory = ({ category, items }: GroupedPostType) => (
  <Wrapper>
    <Header>
      <Text size={7} as="h2" weight="600" appearance="print">
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
            isLink
            href={`/posts/${category?.slug}/${slug}`}
            image={{
              src: `https://source.unsplash.com/random/400x400?sig=${i}`,
              alt: title,
            }}
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
        <Fragment key={category?.title}>
          <PostsCategory category={category} items={items} />
          {i !== posts.length - 1 && <HorizontalSeparator size="xl" />}
        </Fragment>
      ))
    ) : (
      <PostsCategory category={posts.category} items={posts.items} />
    )}
  </Container>
);
