// extract-images-to-base64-map.test.ts
import { extractImagesToBase64Map } from "./extract-images-to-base64-map";
import { getBase64 } from "@/helpers";
import { isImageUrl } from "@/utils";

jest.mock("../get-base64", () => ({
  getBase64: jest.fn(),
}));

jest.mock("../../utils", () => ({
  isImageUrl: jest.fn(),
}));

describe("extractImagesToBase64Map", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return an empty map for an empty input object", async () => {
    const input = {};
    const result = await extractImagesToBase64Map(input);
    expect(result).toEqual({});
  });

  it("should return an empty map for an input object with no image URLs", async () => {
    const input = { title: "Test", description: "No images here" };
    (isImageUrl as unknown as jest.Mock).mockReturnValue(false);
    const result = await extractImagesToBase64Map(input);
    expect(result).toEqual({});
  });

  it("should return a map with base64 strings for valid image URLs", async () => {
    const input = { title: "Test Image", url: "https://example.com/image.jpg" };
    const mockBase64 = "mockBase64String";
    (isImageUrl as unknown as jest.Mock).mockReturnValue(true);
    (getBase64 as jest.Mock).mockResolvedValue(mockBase64);

    const result = await extractImagesToBase64Map(input);
    expect(result).toEqual({ "Test Image": mockBase64 });
    expect(isImageUrl).toHaveBeenCalledWith("https://example.com/image.jpg");
    expect(getBase64).toHaveBeenCalledWith("https://example.com/image.jpg");
  });

  it("should handle nested objects with image URLs", async () => {
    const input = {
      title: "Parent",
      child: {
        title: "Child Image",
        url: "https://example.com/child-image.jpg",
      },
    };
    const mockBase64 = "mockBase64String";
    (isImageUrl as unknown as jest.Mock).mockReturnValue(true);
    (getBase64 as jest.Mock).mockResolvedValue(mockBase64);

    const result = await extractImagesToBase64Map(input);
    expect(result).toEqual({ "Child Image": mockBase64 });
    expect(isImageUrl).toHaveBeenCalledWith(
      "https://example.com/child-image.jpg",
    );
    expect(getBase64).toHaveBeenCalledWith(
      "https://example.com/child-image.jpg",
    );
  });

  it("should not add invalid image URLs to the map", async () => {
    const input = {
      title: "Invalid Image",
      url: "https://example.com/invalid-image.jpg",
    };
    (isImageUrl as unknown as jest.Mock).mockReturnValue(false);

    const result = await extractImagesToBase64Map(input);
    expect(result).toEqual({});
    expect(isImageUrl).toHaveBeenCalledWith(
      "https://example.com/invalid-image.jpg",
    );
    expect(getBase64).not.toHaveBeenCalled();
  });
});
