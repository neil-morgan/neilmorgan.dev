"use client";

import { Container } from "@/components/atoms";
import { PostGrid } from "@/components/molecules";
import type { GroupedPostType } from "@/types";

export const Posts = ({
  posts,
}: {
  posts: GroupedPostType | GroupedPostType[];
}) => (
  <Container>
    {Array.isArray(posts) ? (
      posts.map(({ category, items }) => (
        <PostGrid key={category.title} category={category} items={items} />
      ))
    ) : (
      <PostGrid category={posts.category} items={posts.items} />
    )}
  </Container>
);
