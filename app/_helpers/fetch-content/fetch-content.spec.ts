// fetch-content.test.ts
import { GraphQLError } from "graphql";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { TypedDocumentString } from "@/app/_graphql";
import { isDraftModeEnabled } from "@/app/_helpers/debugMenu/is-draft-mode-enabled";

import { fetchContent } from "./fetch-content";

vi.mock("@/app/_helpers/debugMenu/is-draft-mode-enabled", () => ({
  isDraftModeEnabled: vi.fn(),
}));

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

beforeEach(() => {
  mockFetch.mockClear();
  vi.mocked(isDraftModeEnabled).mockReset();
  vi.mocked(isDraftModeEnabled).mockResolvedValue(null);
});

describe("fetchContent", () => {
  // @ts-expect-error testing only
  const mockDocument: TypedDocumentString<unknown, unknown> = {
    toString: () => "query { test }",
  };

  it("should fetch data successfully", async () => {
    const mockData = { data: { test: "value" } };
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    const result = await fetchContent({
      document: mockDocument,
    });

    expect(result).toEqual(mockData.data);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(process.env.CONTENTFUL_SPACE_ID),
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: expect.stringContaining(
            process.env.CONTENTFUL_DELIVERY_TOKEN,
          ),
        }),
      }),
    );
  });

  it("should throw an error when fetch returns errors", async () => {
    const mockError = { errors: [new GraphQLError("Test error")] };
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockError),
    });

    await expect(
      fetchContent({
        document: mockDocument,
      }),
    ).rejects.toThrow("Test error");
  });

  it("should use preview token when preview is true", async () => {
    const mockData = { data: { test: "value" } };
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    await fetchContent({
      document: mockDocument,
      preview: true,
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(process.env.CONTENTFUL_SPACE_ID),
      expect.objectContaining({
        cache: "no-store",
        headers: expect.objectContaining({
          Authorization: expect.stringContaining(
            process.env.CONTENTFUL_PREVIEW_TOKEN,
          ),
        }),
      }),
    );
  });

  it("should use the debug preview setting when preview is omitted", async () => {
    vi.mocked(isDraftModeEnabled).mockResolvedValue({ previewMode: true });
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce({ data: { test: "value" } }),
    });

    await fetchContent({ document: mockDocument });

    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        cache: "no-store",
        body: JSON.stringify({
          query: "query { test }",
          variables: { preview: true },
        }),
        headers: expect.objectContaining({
          Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_TOKEN}`,
        }),
      }),
    );
  });

  it("should honor explicit published mode without checking draft mode", async () => {
    vi.mocked(isDraftModeEnabled).mockResolvedValue({ previewMode: true });
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce({ data: { test: "value" } }),
    });

    await fetchContent({ document: mockDocument, preview: false });

    expect(isDraftModeEnabled).not.toHaveBeenCalled();
    const requestOptions = mockFetch.mock.calls[0][1];
    expect(requestOptions.cache).toBeUndefined();
    expect(JSON.parse(requestOptions.body).variables.preview).toBe(false);
    expect(requestOptions.headers.Authorization).toBe(
      `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
    );
  });

  it("should use published content when debug preview is disabled", async () => {
    vi.mocked(isDraftModeEnabled).mockResolvedValue({ previewMode: false });
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce({ data: { test: "value" } }),
    });

    await fetchContent({ document: mockDocument });

    const requestOptions = mockFetch.mock.calls[0][1];
    expect(requestOptions.cache).toBeUndefined();
    expect(JSON.parse(requestOptions.body).variables.preview).toBe(false);
    expect(requestOptions.headers.Authorization).toBe(
      `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
    );
  });

  it("should include variables and tags in the request", async () => {
    const mockData = { data: { test: "value" } };
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    const variables = { var1: "value1" };
    const tags = ["tag1", "tag2"];

    await fetchContent({
      document: mockDocument,
      variables,
      tags,
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(process.env.CONTENTFUL_SPACE_ID),
      expect.objectContaining({
        body: expect.stringContaining(
          JSON.stringify({
            query: "query { test }",
            variables: { ...variables, preview: false },
          }),
        ),
        next: { tags },
      }),
    );
  });
});
