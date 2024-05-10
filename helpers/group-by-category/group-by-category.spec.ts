import { groupByCategory } from "./group-by-category";

describe("groupByCategory", () => {
  it("should return an empty array if no items are provided", () => {
    const result = groupByCategory([], "category");
    expect(result).toEqual([]);
  });

  it("should group items by category", () => {
    const items = [
      { category: "Category 1", name: "Item 1" },
      { category: { title: "Category 2", slug: "category-2" }, name: "Item 2" },
      { category: "Category 1", name: "Item 3" },
      { category: { title: "Category 3", slug: "category-3" }, name: "Item 4" },
      { category: "Category 2", name: "Item 5" },
    ];
    const result = groupByCategory(items, "category");
    expect(result).toEqual([
      {
        category: { title: "Category 1", slug: null },
        items: [
          { category: "Category 1", name: "Item 1" },
          { category: "Category 1", name: "Item 3" },
        ],
      },
      {
        category: { title: "Category 2", slug: "category-2" },
        items: [
          {
            category: { title: "Category 2", slug: "category-2" },
            name: "Item 2",
          },
          { category: "Category 2", name: "Item 5" },
        ],
      },
      {
        category: { title: "Category 3", slug: "category-3" },
        items: [
          {
            category: { title: "Category 3", slug: "category-3" },
            name: "Item 4",
          },
        ],
      },
    ]);
  });

  // Add more test cases as needed
});
