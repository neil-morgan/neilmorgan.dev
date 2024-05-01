import { extractCategories } from "./extract-categories";

describe("extractCategories", () => {
  it("should return an empty array if no items are provided", () => {
    const result = extractCategories([]);
    expect(result).toEqual([]);
  });

  it("should extract categories from items with category information", () => {
    const items = [
      { category: { title: "Category 1", slug: "category-1" } },
      { category: { title: "Category 2", slug: "category-2" } },
      { category: null },
      { category: { title: "Category 3", slug: "category-3" } },
      { category: { title: "Category 1", slug: "category-1" } },
    ];
    const result = extractCategories(items);
    expect(result).toEqual([
      { title: "Category 1", slug: "category-1" },
      { title: "Category 2", slug: "category-2" },
      { title: "Category 3", slug: "category-3" },
    ]);
  });
});
