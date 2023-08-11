import type { GroupedItemType, ItemType } from "@/types";

export const groupByCategory = <T extends ItemType<any>>(items: T[]) =>
  Object.values(
    items.reduce((acc: { [key: string]: GroupedItemType<T> }, item: T) => {
      const category = item?.category;

      if (!category || !category.title || !category.slug) {
        return acc;
      }

      const { title, slug } = category;

      if (!acc[title]) {
        acc[title] = {
          category: {
            title,
            slug,
          },
          items: [],
        };
      }

      acc[title].items.push(item);

      return acc;
    }, {}),
  );
