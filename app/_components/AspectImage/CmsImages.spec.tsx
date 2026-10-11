import type { PropsWithChildren } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { BlogPostFragment } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { BlogLatest } from "../BlogLatest/BlogLatest";
import { BlogListing } from "../BlogListing/BlogListing";
import { PageHeader } from "../PageHeader/PageHeader";

vi.mock("@/app/_helpers", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/app/_helpers")>()),
  fetchContent: vi.fn(),
}));

vi.mock("@/app/_components", async () => ({
  ...(await import("./AspectImage")),
  Card: ({ children, href }: PropsWithChildren<{ href: string }>) => (
    <a href={href}>{children}</a>
  ),
  MasonryGrid: ({ children }: PropsWithChildren) => <div>{children}</div>,
  Tag: ({ children }: PropsWithChildren) => <span>{children}</span>,
  Breadcrumbs: () => <nav />,
}));

afterEach(cleanup);
beforeEach(() => vi.mocked(fetchContent).mockReset());

const post = (
  id: string,
  focalPoint: unknown,
  width = 400,
  height = 200,
): BlogPostFragment => ({
  sys: { id, publishedAt: null },
  slug: id,
  title: id,
  description: null,
  category: { title: "Technology", slug: "technology" },
  image: {
    focalPoint,
    image: { url: `/${id}.jpg`, description: id, width, height },
  },
});

describe("CMS image focal-point wiring", () => {
  it("uses each listing post's own image, dimensions and point", async () => {
    vi.mocked(fetchContent).mockResolvedValue({
      blogPosts: {
        items: [
          post("first", { focalPoint: { x: 300, y: 50 } }),
          post("second", { focalPoint: { x: 100, y: 300 } }, 200, 400),
          post("centered", null),
          { ...post("missing", null), image: null },
        ],
      },
    });
    render(await BlogListing());
    expect(screen.getAllByRole("img")).toHaveLength(3);
    expect(screen.getByRole("img", { name: "first" })).toHaveStyle({
      objectPosition: "100% 50%",
    });
    expect(screen.getByRole("img", { name: "second" })).toHaveStyle({
      objectPosition: "50% 100%",
    });
    expect(
      screen.getByRole("img", { name: "first" }).getAttribute("src"),
    ).toContain("first.jpg");
    expect(
      screen.getByRole("img", { name: "second" }).getAttribute("src"),
    ).toContain("second.jpg");
    expect(
      screen.getByRole("img", { name: "centered" }).style.objectPosition,
    ).toBe("");
    expect(screen.getByRole("link", { name: "missing" })).toHaveAttribute(
      "href",
      "/blog/missing",
    );
  });

  it.each([
    { point: { focalPoint: { x: 300, y: 50 } }, position: "50% 0%" },
    { point: null, position: "" },
  ])(
    "passes the latest post's point to AspectImage: $position",
    async ({ point, position }) => {
      vi.mocked(fetchContent).mockResolvedValue({
        blogLatest: { items: [post("latest", point)] },
      });
      render(await BlogLatest());
      expect(screen.getByRole("img").style.objectPosition).toBe(position);
      expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
    },
  );

  it.each([
    { point: { focalPoint: { x: 300, y: 50 } }, position: "100% 50%" },
    { point: null, position: "" },
  ])(
    "passes the page header's point to AspectImage: $position",
    ({ point, position }) => {
      render(
        <PageHeader
          slug={["blog"]}
          page={{
            title: "Blog",
            kicker: null,
            description: null,
            image: post("header", point).image,
          }}
        />,
      );
      expect(screen.getByRole("img").style.objectPosition).toBe(position);
    },
  );

  it("does not render a missing latest-post or header image", async () => {
    vi.mocked(fetchContent).mockResolvedValue({
      blogLatest: { items: [{ ...post("latest", null), image: null }] },
    });
    render(await BlogLatest());
    render(
      <PageHeader
        slug={["blog"]}
        page={{ title: "Blog", kicker: null, description: null, image: null }}
      />,
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
