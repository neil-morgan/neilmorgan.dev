import { describe, expect, it } from "vitest";

import { groupPostsByCategory } from "./group-posts-by-category";

const post = (id: string, category?: { title: string; slug: string }) => ({
  id,
  category: category ?? null,
});

const react = { title: "React", slug: "react" };
const css = { title: "CSS", slug: "css" };

describe("groupPostsByCategory", () => {
  it("returns an empty array when there are no posts", () => {
    expect(groupPostsByCategory([])).toEqual([]);
  });

  it("groups posts by category sorted alphabetically by title", () => {
    const groups = groupPostsByCategory([
      post("1", react),
      post("2", css),
      post("3", react),
    ]);
    expect(groups.map((g) => g.slug)).toEqual(["css", "react"]);
    expect(groups[1].posts.map((p) => p.id)).toEqual(["1", "3"]);
  });

  it("places uncategorised posts in a trailing Other group", () => {
    const groups = groupPostsByCategory([
      post("1"),
      post("2", react),
      null,
      post("3"),
    ]);
    expect(groups.map((g) => g.title)).toEqual(["React", "Other"]);
    expect(groups[1].posts.map((p) => p.id)).toEqual(["1", "3"]);
  });
});
