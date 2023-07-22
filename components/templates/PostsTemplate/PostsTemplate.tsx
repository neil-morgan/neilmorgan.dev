import type { GroupedPostType } from "@/types";

export const PostsTemplate = ({ posts }: { posts: GroupedPostType[] }) => {
  return (
    <div>
      {posts.map(({ category, items }) => {
        return (
          <div key={category}>
            {category}{" "}
            {items.map(({ title }, i) => {
              return <div key={i}>{title}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
