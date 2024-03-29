import type { CategoryConstraintType, CategoryType } from "@/service";

export const extractCategories = <T extends CategoryConstraintType<any>>(
  items: T[],
) => {
  const categories: { [key: string]: CategoryType } = {};

  items.forEach(item => {
    const { title, slug } = item.category as CategoryType;
    categories[slug] = { title, slug };
  });

  return Object.values(categories);
};
