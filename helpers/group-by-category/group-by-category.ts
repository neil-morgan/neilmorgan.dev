import type { GroupedByCategoryType, CategoryConstraintType } from "@/types";

export const groupByCategory = <T extends CategoryConstraintType<any>>(
  items: T[],
) =>
  Object.values(
    items.reduce(
      (acc: { [key: string]: GroupedByCategoryType<T> }, item: T) => {
        const category = item?.category;

        if (!category) {
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
      },
      {},
    ),
  );
