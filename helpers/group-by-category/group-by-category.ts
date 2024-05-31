import type { GroupedCategoryType, TagType } from "@/service";

export const groupByCategory = <T, K extends keyof T>(
  objectArray: T[],
  key: K,
): GroupedCategoryType<T>[] => {
  const isCategoryItem = (item: any): item is TagType =>
    typeof item === "object" && "title" in item;

  const groupedObject = objectArray.reduce(
    (acc: Record<string, GroupedCategoryType<T>>, curr: T) => {
      let item = curr[key];
      if (item === null || item === undefined) {
        return acc;
      }

      let title: string | null;
      let slug: string | null | undefined;

      if (typeof item === "string") {
        title = item;
      } else if (isCategoryItem(item)) {
        title = item.title;
        slug = item.slug;
      } else {
        return acc;
      }

      if (title === null) {
        return acc;
      }

      if (!acc[title]) {
        acc[title] = {
          category: {
            title,
            slug: slug || null,
          },
          items: [],
        };
      }

      acc[title].items.push(curr);

      return acc;
    },
    {},
  );

  return Object.values(groupedObject);
};
