import type { PropsWithChildren } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Card } from "./Card";
import type { CardProps } from "./Card.types";

vi.mock("@/app/_components", () => ({
  Box: ({ children, href }: PropsWithChildren<{ href?: string }>) =>
    href ? <a href={href}>{children}</a> : <div>{children}</div>,
  AspectImage: ({
    url,
    description,
    sourceSize,
  }: {
    url: string;
    description: string;
    sourceSize: { width: number | null; height: number | null };
  }) => (
    <span
      role="img"
      aria-label={description}
      data-url={url}
      data-width={sourceSize.width}
      data-height={sourceSize.height}
    />
  ),
  TagList: () => null,
}));

afterEach(cleanup);

const page: CardProps = {
  __typename: "Page",
  contentfulMetadata: { tags: [] },
  sys: { id: "page", publishedAt: null },
  title: "About",
  slug: "/about",
  kicker: null,
  description: null,
  image: {
    focalPoint: null,
    image: {
      url: "/about.jpg",
      description: "About image",
      width: 400,
      height: 200,
    },
  },
};

describe("Card", () => {
  it("renders the page link and passes original image dimensions", () => {
    render(<Card {...page} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/about");
    const image = screen.getByRole("img", { name: "About image" });
    expect(image).toHaveAttribute("data-url", "/about.jpg");
    expect(image).toHaveAttribute("data-width", "400");
    expect(image).toHaveAttribute("data-height", "200");
  });

  it.each([
    null,
    { focalPoint: null, image: null },
    {
      focalPoint: null,
      image: { url: null, description: null, width: null, height: null },
    },
  ])("omits unavailable images: %j", (image) => {
    render(<Card {...page} image={image} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("accepts missing CMS text, slug, description and dimensions", () => {
    render(
      <Card
        {...page}
        title={null}
        slug={null}
        image={{
          focalPoint: null,
          image: {
            url: "/about.jpg",
            description: null,
            width: null,
            height: null,
          },
        }}
      />,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "");
  });
});
