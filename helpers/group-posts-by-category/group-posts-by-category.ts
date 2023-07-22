import type { Post } from "@/graphql/cms";
import type { GroupedPostType } from "@/types";

export const groupPostsByCategory = (items: Post[]) =>
  Object.values(
    items.reduce((acc: { [key: string]: GroupedPostType }, item: Post) => {
      const category = item?.category?.title;

      if (!category) {
        return acc;
      }

      if (!acc[category]) {
        acc[category] = { category, items: [] };
      }

      acc[category].items.push(item);

      return acc;
    }, {}),
  );
