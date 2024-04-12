import type { PostCategoryFragment } from "@/service";

type ItemWithCategory<T> = T & { category: PostCategoryFragment | null };

export const extractCategories = <T>(items: ItemWithCategory<T>[]) => {
  const categories: { [key: string]: PostCategoryFragment } = {};

  items.forEach(item => {
    if (item.category) {
      const { title, slug } = item.category;
      categories[slug || ""] = { title, slug };
    }
  });

  return Object.values(categories);
};
