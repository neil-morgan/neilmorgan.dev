import { isImageUrl } from "./is-image-url";

describe("isImageUrl", () => {
  it("should return true for valid image URLs", () => {
    expect(isImageUrl("https://example.com/image.png")).toBe(true);
    expect(isImageUrl("https://example.com/path/to/image.jpg")).toBe(true);
    expect(isImageUrl("https://example.com/path/to/image.jpeg")).toBe(true);
    expect(isImageUrl("https://example.com/path/to/image.svg")).toBe(true);
  });

  it("should return false for non-string values", () => {
    expect(isImageUrl(123)).toBe(false);
    expect(isImageUrl({})).toBe(false);
    expect(isImageUrl([])).toBe(false);
    expect(isImageUrl(null)).toBe(false);
    expect(isImageUrl(undefined)).toBe(false);
  });

  it("should return false for strings that are not image URLs", () => {
    expect(isImageUrl("https://example.com/image.pdf")).toBe(false);
    expect(isImageUrl("https://example.com/image")).toBe(false);
    expect(isImageUrl("image.txt")).toBe(false);
    expect(isImageUrl("")).toBe(false);
  });
});
