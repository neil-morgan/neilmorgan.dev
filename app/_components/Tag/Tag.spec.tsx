import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { TagList } from "./Tag";
import styles from "./Tag.module.css";

afterEach(cleanup);

describe("TagList", () => {
  it("renders named tags in order with the requested styling", () => {
    const { container } = render(
      <TagList
        list={[{ name: "React", slug: "react" }, { name: "TypeScript" }]}
        color="secondary"
        className="custom-tags"
      />,
    );

    expect(container.firstElementChild).toHaveClass(
      styles["tag-list"],
      "custom-tags",
    );
    expect(
      Array.from(
        container.firstElementChild?.children ?? [],
        (tag) => tag.textContent,
      ),
    ).toEqual(["React", "TypeScript"]);
    expect(screen.getByText("React")).toHaveClass(styles.secondary);
  });

  it("omits null entries and tags without a name", () => {
    const { container } = render(
      <TagList list={[null, { name: null }, { name: "React" }, null]} />,
    );

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(container.firstElementChild?.children).toHaveLength(1);
  });

  it.each([{ list: [] }, { list: [null, { name: null }] }])(
    "renders no tags when there are no named entries: $list",
    ({ list }) => {
      const { container } = render(<TagList list={list} />);

      expect(container.firstElementChild).toBeEmptyDOMElement();
    },
  );
});
