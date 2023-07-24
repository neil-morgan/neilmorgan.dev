import type { Post } from "@/graphql/cms";
import type { GroupedPostType } from "@/types";

export const groupPostsByCategory = (items: Post[]) =>
  Object.values(
    items.reduce((acc: { [key: string]: GroupedPostType }, item: Post) => {
      const title = item?.category?.title;
      const categorySlug = item?.category?.slug;

      if (!title || !categorySlug) {
        return acc;
      }

      if (!acc[title]) {
        acc[title] = {
          category: {
            title,
            slug: categorySlug,
          },
          items: [],
        };
      }

      acc[title].items.push(item);

      return acc;
    }, {}),
  );
