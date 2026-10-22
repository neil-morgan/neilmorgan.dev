import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { PageContentBySlugQuery } from "@/app/_graphql/generated";
import { PageHeader } from "../PageHeader/PageHeader";
import { LiveRichtext } from "../Richtext/LiveRichtext";
import { LivePageHeader, LivePageRichtext } from "./PagePreview";

vi.mock("@contentful/live-preview/react", () => ({
  useContentfulLiveUpdates: vi.fn(),
  useContentfulInspectorMode: vi.fn(),
}));

vi.mock("../PageHeader/PageHeader", () => ({
  PageHeader: vi.fn(() => <header>Updated header</header>),
}));

vi.mock("../Richtext/LiveRichtext", () => ({
  LiveRichtext: vi.fn(() => <p>Updated rich text</p>),
}));

const page = {
  __typename: "Page" as const,
  sys: { id: "home" },
  slug: "/",
  title: "Original title",
  kicker: null,
  description: null,
  image: null,
  content: null,
};
const pageData: PageContentBySlugQuery = {
  pageCollection: { items: [page] },
};
const inspectorProps = vi.fn(() => ({
  "data-contentful-field-id": "content",
  "data-contentful-entry-id": "home",
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useContentfulLiveUpdates).mockReturnValue(pageData);
  vi.mocked(useContentfulInspectorMode).mockReturnValue(inspectorProps);
});

afterEach(cleanup);

describe("live page leaves", () => {
  it("uses updated header data and a parsed GraphQL document", () => {
    const updatedPage = { ...page, title: "Updated title" };
    vi.mocked(useContentfulLiveUpdates).mockReturnValue({
      pageCollection: { items: [updatedPage] },
    });

    render(<LivePageHeader pageData={pageData} slug={[]} />);

    expect(useContentfulLiveUpdates).toHaveBeenCalledWith(pageData, {
      query: expect.objectContaining({ kind: "Document" }),
      locale: "en-US",
    });
    expect(useContentfulInspectorMode).toHaveBeenCalledWith({
      entryId: "home",
      locale: "en-US",
    });
    expect(PageHeader).toHaveBeenCalledWith(
      { page: updatedPage, slug: [], inspectorProps },
      undefined,
    );
  });

  it("renders newly added rich text using server-provided embedded entries", () => {
    const content = {
      json: { nodeType: "document", data: {}, content: [] },
      links: { entries: { block: [], inline: [] }, assets: { block: [] } },
    };
    vi.mocked(useContentfulLiveUpdates).mockReturnValue({
      pageCollection: { items: [{ ...page, content }] },
    });
    const embeddedEntries = [{ id: "entry", node: <div>Server entry</div> }];

    render(
      <LivePageRichtext
        pageData={pageData}
        embeddedEntries={embeddedEntries}
        className="content"
      />,
    );

    expect(LiveRichtext).toHaveBeenCalledWith(
      { ...content, entries: embeddedEntries },
      undefined,
    );
    expect(screen.getByText("Updated rich text").parentElement).toHaveClass(
      "content",
    );
    expect(screen.getByText("Updated rich text").parentElement).toHaveAttribute(
      "data-contentful-field-id",
      "content",
    );
    expect(inspectorProps).toHaveBeenCalledWith({ fieldId: "content" });
  });

  it("omits missing rich text", () => {
    const { container } = render(
      <LivePageRichtext pageData={pageData} embeddedEntries={[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("removes rich text when it is cleared in live preview", () => {
    const content = {
      json: { nodeType: "document", data: {}, content: [] },
      links: { entries: { block: [], inline: [] }, assets: { block: [] } },
    };
    vi.mocked(useContentfulLiveUpdates).mockReturnValue({
      pageCollection: { items: [{ ...page, content }] },
    });
    const { container, rerender } = render(
      <LivePageRichtext pageData={pageData} embeddedEntries={[]} />,
    );
    expect(screen.getByText("Updated rich text")).toBeInTheDocument();

    vi.mocked(useContentfulLiveUpdates).mockReturnValue(pageData);
    rerender(<LivePageRichtext pageData={pageData} embeddedEntries={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("omits leaves when the live page is missing", () => {
    vi.mocked(useContentfulLiveUpdates).mockReturnValue({
      pageCollection: { items: [] },
    });
    const { container } = render(
      <>
        <LivePageHeader pageData={pageData} slug={[]} />
        <LivePageRichtext pageData={pageData} embeddedEntries={[]} />
      </>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
