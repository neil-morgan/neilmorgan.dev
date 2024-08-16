// fetch-content.test.ts
import { GraphQLError } from "graphql";
import { fetchContent } from "./fetch-content";
import type { TypedDocumentString } from "@/service";

global.fetch = jest.fn();

beforeEach(() => {
  (fetch as jest.Mock).mockClear();
});

describe("fetchContent", () => {
  //@ts-ignore
  const mockDocument: TypedDocumentString<any, any> = {
    toString: () => "query { test }",
  };

  it("should fetch data successfully", async () => {
    const mockData = { data: { test: "value" } };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
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
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockError),
    });

    await expect(
      fetchContent({
        document: mockDocument,
      }),
    ).rejects.toThrow("Test error");
  });

  it("should use preview token when preview is true", async () => {
    const mockData = { data: { test: "value" } };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    await fetchContent({
      document: mockDocument,
      preview: true,
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(process.env.CONTENTFUL_SPACE_ID),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: expect.stringContaining(
            process.env.CONTENTFUL_PREVIEW_TOKEN,
          ),
        }),
      }),
    );
  });

  it("should include variables and tags in the request", async () => {
    const mockData = { data: { test: "value" } };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
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
            variables: { ...variables, preview: undefined },
          }),
        ),
        next: { tags },
      }),
    );
  });
});
