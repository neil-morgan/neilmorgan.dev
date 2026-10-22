import type { PropsWithChildren } from "react";
import { cleanup, render, screen, act } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";

const layout = vi.hoisted(() => ({
  onReady: undefined as (() => void) | undefined,
}));

vi.mock("next/dynamic", () => ({
  default:
    () =>
    ({
      children,
      onReady,
    }: PropsWithChildren<MasonryGridProps> & {
      onReady: () => void;
    }) => {
      layout.onReady = onReady;
      return <div data-testid="layout">{children}</div>;
    },
}));

import { MasonryGrid } from "./MasonryGrid";
import { MasonryGridSkeleton } from "./MasonryGridSkeleton";
import type { MasonryGridProps } from "./MasonryGrid.types";

afterEach(cleanup);

describe("MasonryGrid loading state", () => {
  it("renders one skeleton per valid child in the initial HTML", () => {
    const root = document.createElement("div");
    root.innerHTML = renderToStaticMarkup(
      <MasonryGrid gutter="2rem">
        <article>First</article>
        {null}
        {false}
        <article>Second</article>
      </MasonryGrid>,
    );
    expect(
      root.querySelector("[data-masonry-skeleton]")?.children,
    ).toHaveLength(2);
    expect(root.querySelector("[aria-busy]")).toHaveAttribute(
      "aria-busy",
      "true",
    );
    expect(root.querySelector("[inert]")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("removes the placeholder and reveals content only when layout is ready", () => {
    const { container } = render(
      <MasonryGrid gutter="1rem">
        <article>Ready content</article>
      </MasonryGrid>,
    );
    expect(container.querySelector("[data-masonry-skeleton]")).not.toBeNull();
    expect(screen.getByTestId("layout").parentElement).toHaveAttribute("inert");
    act(() => layout.onReady?.());
    expect(container.querySelector("[data-masonry-skeleton]")).toBeNull();
    expect(container.querySelector("[aria-busy]")).toHaveAttribute(
      "aria-busy",
      "false",
    );
    expect(screen.getByTestId("layout").parentElement).not.toHaveAttribute(
      "inert",
    );
    expect(screen.getByText("Ready content")).toBeInTheDocument();
  });

  it("renders no placeholder for an empty grid", () => {
    const { container } = render(
      <MasonryGrid gutter="2rem">{null}</MasonryGrid>,
    );
    expect(container).toBeEmptyDOMElement();
  });
});

const invalidConfigurations: Record<number, number>[] = [
  { [-1]: 2 },
  { [Infinity]: 2 },
  Object.fromEntries([["", 2]]),
  { 0: 0 },
  { 0: 1.5 },
];

describe("MasonryGridSkeleton", () => {
  it("matches defaults and preserves the gutter", () => {
    const root = document.createElement("div");
    root.innerHTML = renderToStaticMarkup(
      <MasonryGrid gutter="2rem">
        <article>Content</article>
      </MasonryGrid>,
    );
    const skeleton = root.querySelector<HTMLElement>("[data-masonry-skeleton]");
    expect(skeleton?.style.columnGap).toBe("2rem");
    const css = root.querySelector("style")?.textContent;
    expect(css).toContain("column-count:1");
    expect(css).toContain("@media (width > 875px)");
    expect(css).toContain("@media (width > 1216px)");
  });

  it("sorts custom maps, starts with the first count and scopes each instance", () => {
    const root = document.createElement("div");
    root.innerHTML = renderToStaticMarkup(
      <>
        <MasonryGridSkeleton
          count={3}
          gutter="3rem"
          heights={["18rem", "24rem"]}
          responsive={{ 1000: 4, 300: 2, 700.5: 3 }}
        />
        <MasonryGridSkeleton count={1} gutter="1rem" responsive={{}} />
      </>,
    );
    const styles = [...root.querySelectorAll("style")].map(
      (style) => style.textContent,
    );
    expect(styles[0]).toBe(
      '[data-masonry-skeleton="300:2;700.5:3;1000:4"]{column-count:2;}\n' +
        '@media (width > 700.5px){[data-masonry-skeleton="300:2;700.5:3;1000:4"]{column-count:3;}}\n' +
        '@media (width > 1000px){[data-masonry-skeleton="300:2;700.5:3;1000:4"]{column-count:4;}}',
    );
    expect(styles[1]).toBe('[data-masonry-skeleton="empty"]{column-count:1;}');
    const blocks = root.querySelectorAll<HTMLElement>(
      '[data-masonry-skeleton="300:2;700.5:3;1000:4"] > div',
    );
    expect([...blocks].map((block) => block.style.height)).toEqual([
      "18rem",
      "24rem",
      "18rem",
    ]);
    expect(blocks[0].style.marginBottom).toBe("3rem");
  });

  it.each(invalidConfigurations)(
    "rejects invalid responsive configuration %s",
    (responsive) => {
      expect(() =>
        renderToStaticMarkup(
          <MasonryGridSkeleton count={1} gutter="0" responsive={responsive} />,
        ),
      ).toThrow(
        "finite non-negative breakpoints and positive integer column counts",
      );
    },
  );
});
