import type { GroupedCategoryType, Skill } from "@/service";

export const sortProficienciesByPriority = (
  array: GroupedCategoryType<Skill>[],
) => {
  const categoryOrder = ["Core", "Secondary", "Learning"];

  function compareCategories(
    a: GroupedCategoryType<Skill>,
    b: GroupedCategoryType<Skill>,
  ) {
    if (a?.category?.title && b?.category?.title) {
      return (
        categoryOrder.indexOf(a.category.title) -
        categoryOrder.indexOf(b.category.title)
      );
    }

    return 0;
  }

  array.sort(compareCategories);

  return array;
};
