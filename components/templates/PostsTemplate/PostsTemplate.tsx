"use client";

import { Wrapper, Header } from "./styles";
import {
  Container,
  Heading,
  Text,
  Pod,
  Grid,
} from "@/components/atoms";
import type { GroupedPostType } from "@/types";

export const PostsCategory = ({ category, items }: GroupedPostType) => (
  <Wrapper>
    <Header>
      <Heading size="h6" as="h2" style="print">
        {category?.title}
      </Heading>
      <Text>
        {items.length} Post{items.length !== 1 && "s"}
      </Text>
    </Header>

    <Grid>
      {items.map(({ title, description, slug }, i) =>
        title && description && slug ? (
          <Pod
            key={i}
            heading={title}
            description={description}
            cta={{
              href: `/posts/${category?.slug}/${slug}`,
              label: "READ",
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
  <Container css={{ marginTop: "$11" }}>
    {Array.isArray(posts) ? (
      posts.map(({ category, items }) => (
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
