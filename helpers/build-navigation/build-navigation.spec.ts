import { LOCATIONS } from "../../lib/site/constants";
import { buildNavigation } from "./build-navigation";

describe("buildNavigation", () => {
  it("should return an array of navigation items with post categories", () => {
    const postCategories = [
      { title: "Category 1", slug: "category-1" },
      { title: "Category 2", slug: "category-2" },
    ];
    const navigation = buildNavigation(postCategories);
    expect(navigation).toHaveLength(2);
    expect(navigation[0]).toHaveProperty("options", [
      { label: "Category 1", slug: "/posts/category-1" },
      { label: "Category 2", slug: "/posts/category-2" },
    ]);
  });

  it("should return an array of navigation items with experience options", () => {
    const navigation = buildNavigation([]);
    expect(navigation).toHaveLength(2);
    expect(navigation[1]).toHaveProperty("options", [
      { ...LOCATIONS.skills },
      { ...LOCATIONS.projects },
      { ...LOCATIONS.feedback },
      // { ...LOCATIONS.roles },
    ]);
  });

  it("should handle empty post categories", () => {
    const navigation = buildNavigation([]);
    expect(navigation[0]).toHaveProperty("options", []);
  });
});
