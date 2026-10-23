import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { PageHeaderFragment } from "@/app/_graphql/generated";
import { PageHeader } from "../PageHeader/PageHeader";
import type { AspectImageProps } from "./types";

vi.mock("@/app/_components", () => ({
  AspectImage: ({
    url,
    description,
    focalPoint,
    sourceSize,
  }: AspectImageProps) => (
    <div
      role="img"
      aria-label={description}
      data-url={url}
      data-focal-point={JSON.stringify(focalPoint)}
      data-source-size={JSON.stringify(sourceSize)}
    />
  ),
  Breadcrumbs: () => <nav />,
}));

afterEach(cleanup);

const page = (
  focalPoint: unknown,
  width = 400,
  height = 200,
): PageHeaderFragment => ({
  title: "Blog",
  kicker: null,
  description: null,
  slug: "blog",
  contentfulMetadata: {
    tags: [],
  },
  sys: {
    publishedAt: "2024-06-06",
    firstPublishedAt: "2024-06-06",
  },
  image: {
    focalPoint,
    image: {
      url: "/header.jpg",
      description: "Header",
      width,
      height,
    },
  },
});

describe("CMS image focal-point wiring", () => {
  it.each([
    {
      point: { focalPoint: { x: 300, y: 50 } },
      width: 400,
      height: 200,
    },
    {
      point: { focalPoint: { x: 100, y: 300 } },
      width: 200,
      height: 400,
    },
    { point: null, width: 400, height: 200 },
  ])(
    "passes the page header's focal point and dimensions to AspectImage",
    ({ point, width, height }) => {
      render(<PageHeader slug={["blog"]} page={page(point, width, height)} />);

      expect(screen.getByRole("img")).toHaveAttribute(
        "data-focal-point",
        JSON.stringify(point),
      );
      expect(screen.getByRole("img")).toHaveAttribute(
        "data-source-size",
        JSON.stringify({
          url: "/header.jpg",
          description: "Header",
          width,
          height,
        }),
      );
    },
  );

  it("does not render a missing page header image", () => {
    render(
      <PageHeader
        slug={["blog"]}
        page={{
          sys: {
            publishedAt: "2024-06-06",
            firstPublishedAt: "2024-06-06",
          },
          contentfulMetadata: {
            tags: [],
          },
          slug: "blog",
          title: "Blog",
          kicker: null,
          description: null,
          image: null,
        }}
      />,
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
