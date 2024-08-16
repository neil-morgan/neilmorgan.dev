// sort-array-by-category-order.test.ts
import { sortProficienciesByPriority } from "./sort-proficiencies-by-priority";
import type { GroupedCategoryType, Skill } from "@/service";

describe("sortProficienciesByPriority", () => {
  const mockData: GroupedCategoryType<Skill>[] = [
    { category: { title: "Secondary", slug: "secondary" }, items: [] },
    { category: { title: "Core", slug: "core" }, items: [] },
    { category: { title: "Learning", slug: "learning" }, items: [] },
  ];

  it("should sort the array by category order", () => {
    const result = sortProficienciesByPriority([...mockData]);
    expect(result.map(item => item.category?.title)).toEqual([
      "Core",
      "Secondary",
      "Learning",
    ]);
  });

  it("should handle missing categories", () => {
    const partialData: GroupedCategoryType<Skill>[] = [
      { category: { title: "Secondary", slug: "secondary" }, items: [] },
      { category: { title: "Learning", slug: "learning" }, items: [] },
    ];
    const result = sortProficienciesByPriority([...partialData]);
    expect(result.map(item => item.category?.title)).toEqual([
      "Secondary",
      "Learning",
    ]);
  });

  it("should handle an already sorted array", () => {
    const sortedData: GroupedCategoryType<Skill>[] = [
      { category: { title: "Core", slug: "core" }, items: [] },
      { category: { title: "Secondary", slug: "secondary" }, items: [] },
      { category: { title: "Learning", slug: "learning" }, items: [] },
    ];
    const result = sortProficienciesByPriority([...sortedData]);
    expect(result.map(item => item.category?.title)).toEqual([
      "Core",
      "Secondary",
      "Learning",
    ]);
  });

  it("should handle an empty array", () => {
    const emptyData: GroupedCategoryType<Skill>[] = [];
    const result = sortProficienciesByPriority([...emptyData]);
    expect(result).toEqual([]);
  });
});
