import { notFound } from "next/navigation";
import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  AllPageSlugsDocument,
  PageContentBySlugDocument,
  type AllPageSlugsQuery,
  type PageContentBySlugQuery,
} from "@/app/_graphql/generated";
import {
  fetchContent,
  getEmbeddedEntries,
  isDraftModeEnabled,
} from "@/app/_helpers";
import {
  PageHeader,
  Richtext,
  LivePageHeader,
  LivePageRichtext,
} from "@/app/_components";
import Root, { generateMetadata, generateStaticParams } from "./page";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_HTTP_ERROR_FALLBACK;404");
  }),
}));

vi.mock("@/app/_helpers", () => ({
  fetchContent: vi.fn(),
  getEmbeddedEntries: vi.fn(() => []),
  isDraftModeEnabled: vi.fn(),
}));

vi.mock("@/app/_components", () => ({
  PageContainer: ({ children }: React.PropsWithChildren) => (
    <div>{children}</div>
  ),
  PageHeader: vi.fn(() => <header>CMS page header</header>),
  Richtext: vi.fn(() => <div>CMS rich text</div>),
  LivePageHeader: vi.fn(() => <header>Live page header</header>),
  LivePageRichtext: vi.fn(() => <div>Live rich text</div>),
}));

const pageData: PageContentBySlugQuery = {
  pageCollection: {
    items: [
      {
        __typename: "Page",
        sys: { id: "home" },
        slug: "/",
        title: "Welcome",
        kicker: null,
        description: "CMS homepage description",
        image: null,
        content: null,
      },
    ],
  },
};

const missingPageData: PageContentBySlugQuery = {
  pageCollection: { items: [] },
};

const paramsFor = (slug?: string[]) => ({
  params: Promise.resolve(slug === undefined ? {} : { slug }),
});

beforeEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.mocked(fetchContent).mockReset();
  vi.mocked(isDraftModeEnabled).mockResolvedValue(null);
});

describe("optional CMS catch-all", () => {
  it.each([undefined, []])(
    "renders the CMS homepage on the server with slug %j",
    async (slug) => {
      vi.mocked(fetchContent).mockResolvedValue(pageData);

      render(await Root(paramsFor(slug)));

      expect(fetchContent).toHaveBeenCalledExactlyOnceWith({
        document: PageContentBySlugDocument,
        variables: { slug: "/" },
      });
      expect(getEmbeddedEntries).not.toHaveBeenCalled();
      expect(PageHeader).toHaveBeenCalledWith(
        { page: pageData.pageCollection?.items[0], slug: [] },
        undefined,
      );
      expect(screen.getByText("CMS page header")).toBeInTheDocument();
      expect(LivePageHeader).not.toHaveBeenCalled();
      expect(LivePageRichtext).not.toHaveBeenCalled();
    },
  );

  it("uses CMS metadata for the homepage", async () => {
    vi.mocked(fetchContent).mockResolvedValue(pageData);

    expect(await generateMetadata(paramsFor())).toEqual({
      title: "Neil Morgan | Welcome",
      description: "CMS homepage description",
    });
    expect(fetchContent).toHaveBeenCalledExactlyOnceWith({
      document: PageContentBySlugDocument,
      variables: { slug: "/" },
    });
  });

  it.each([undefined, ["missing"]])(
    "returns the same 404 for missing CMS pages with slug %j",
    async (slug) => {
      vi.mocked(fetchContent).mockResolvedValue(missingPageData);

      await expect(Root(paramsFor(slug))).rejects.toThrow(
        "NEXT_HTTP_ERROR_FALLBACK;404",
      );
      expect(notFound).toHaveBeenCalledOnce();
      expect(getEmbeddedEntries).not.toHaveBeenCalled();
    },
  );

  it("uses the existing missing-page metadata for a missing homepage", async () => {
    vi.mocked(fetchContent).mockResolvedValue(missingPageData);

    expect(await generateMetadata(paramsFor())).toEqual({
      title: "Neil Morgan | Not found",
    });
  });

  it("propagates CMS errors without rendering fallback homepage content", async () => {
    const error = new Error("CMS unavailable");
    vi.mocked(fetchContent).mockRejectedValue(error);

    await expect(Root(paramsFor())).rejects.toThrow(error);
    await expect(generateMetadata(paramsFor())).rejects.toThrow(error);
    expect(notFound).not.toHaveBeenCalled();
    expect(PageHeader).not.toHaveBeenCalled();
    expect(LivePageHeader).not.toHaveBeenCalled();
  });

  it("preserves ordinary CMS routes", async () => {
    vi.mocked(fetchContent).mockResolvedValue(pageData);

    render(await Root(paramsFor(["about"])));

    expect(fetchContent).toHaveBeenCalledExactlyOnceWith({
      document: PageContentBySlugDocument,
      variables: { slug: "about" },
    });
    expect(PageHeader).toHaveBeenCalledWith(
      expect.objectContaining({ slug: ["about"] }),
      undefined,
    );
  });

  it("uses the exact nested CMS slug", async () => {
    const typedPageData: PageContentBySlugQuery = {
      pageCollection: {
        items: [
          {
            ...pageData.pageCollection!.items[0]!,
            slug: "notes/first",
          },
        ],
      },
    };
    vi.mocked(fetchContent).mockResolvedValue(typedPageData);
    const slug = ["notes", "first"];

    render(await Root(paramsFor(slug)));
    expect(await generateMetadata(paramsFor(slug))).toEqual({
      title: "Neil Morgan | Welcome",
      description: "CMS homepage description",
    });
    expect(fetchContent).toHaveBeenCalledTimes(2);
    expect(fetchContent).toHaveBeenNthCalledWith(1, {
      document: PageContentBySlugDocument,
      variables: { slug: "notes/first" },
    });
    expect(fetchContent).toHaveBeenNthCalledWith(2, {
      document: PageContentBySlugDocument,
      variables: { slug: "notes/first" },
    });
    expect(PageHeader).toHaveBeenCalledWith(
      { slug, page: typedPageData.pageCollection?.items[0] },
      undefined,
    );
  });

  it("statically generates every published page using its exact slug", async () => {
    const firstPage: AllPageSlugsQuery = {
      pageCollection: {
        total: 3,
        items: [{ slug: "/" }, { slug: "about" }],
      },
    };
    const secondPage: AllPageSlugsQuery = {
      pageCollection: {
        total: 3,
        items: [{ slug: "notes/first" }],
      },
    };
    vi.mocked(fetchContent)
      .mockResolvedValueOnce(firstPage)
      .mockResolvedValueOnce(secondPage);

    expect(await generateStaticParams()).toEqual([
      { slug: [] },
      { slug: ["about"] },
      { slug: ["notes", "first"] },
    ]);
    expect(fetchContent).toHaveBeenNthCalledWith(1, {
      document: AllPageSlugsDocument,
      variables: { skip: 0 },
      preview: false,
    });
    expect(fetchContent).toHaveBeenNthCalledWith(2, {
      document: AllPageSlugsDocument,
      variables: { skip: 2 },
      preview: false,
    });
  });

  it("surfaces a missing CMS page collection during static route generation", async () => {
    vi.mocked(fetchContent).mockResolvedValue({ pageCollection: null });

    await expect(generateStaticParams()).rejects.toThrow(
      "CMS returned no page collection while generating static routes at offset 0.",
    );
  });

  it("loads the blog index from its CMS slug", async () => {
    const blogPageData: PageContentBySlugQuery = {
      pageCollection: {
        items: [
          {
            ...pageData.pageCollection!.items[0]!,
            slug: "blog",
          },
        ],
      },
    };
    vi.mocked(fetchContent).mockResolvedValue(blogPageData);

    render(await Root(paramsFor(["blog"])));

    expect(fetchContent).toHaveBeenCalledExactlyOnceWith({
      document: PageContentBySlugDocument,
      variables: { slug: "blog" },
    });
    expect(PageHeader).toHaveBeenCalledWith(
      { slug: ["blog"], page: blogPageData.pageCollection?.items[0] },
      undefined,
    );
  });

  it("renders published rich text without a live-update boundary", async () => {
    const page = pageData.pageCollection!.items[0]!;
    const content = {
      json: { nodeType: "document", data: {}, content: [] },
      links: { entries: { block: [], inline: [] }, assets: { block: [] } },
    };
    vi.mocked(fetchContent).mockResolvedValue({
      pageCollection: { items: [{ ...page, content }] },
    });

    render(await Root(paramsFor()));

    expect(Richtext).toHaveBeenCalledWith(content, undefined);
    expect(LivePageRichtext).not.toHaveBeenCalled();
    expect(getEmbeddedEntries).not.toHaveBeenCalled();
  });

  it("uses client leaves only in preview and prepares embedded entries on the server", async () => {
    vi.mocked(fetchContent).mockResolvedValue(pageData);
    vi.mocked(isDraftModeEnabled).mockResolvedValue({ previewMode: true });

    render(await Root(paramsFor()));

    expect(PageHeader).not.toHaveBeenCalled();
    expect(Richtext).not.toHaveBeenCalled();
    expect(LivePageHeader).toHaveBeenCalledWith(
      { pageData, slug: [] },
      undefined,
    );
    expect(getEmbeddedEntries).toHaveBeenCalledExactlyOnceWith(
      pageData.pageCollection?.items[0],
    );
    expect(LivePageRichtext).toHaveBeenCalledWith(
      expect.objectContaining({ pageData, embeddedEntries: [] }),
      undefined,
    );
  });
});
