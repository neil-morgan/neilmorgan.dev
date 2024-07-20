import { isInternalUrl } from "./is-internal-url";
import { SITE_BASE_URL } from "@/lib/site";

describe("isInternalUrl", () => {
  it("should return true for internal URLs", () => {
    const internalUrl = `${SITE_BASE_URL}/internal-page`;
    expect(isInternalUrl(internalUrl)).toBe(true);
  });

  it("should return false for external URLs", () => {
    const externalUrl = "https://www.externalwebsite.com";
    expect(isInternalUrl(externalUrl)).toBe(false);
  });

  it("should handle relative URLs as internal", () => {
    const relativeUrl = "/internal-page";
    expect(isInternalUrl(relativeUrl)).toBe(true);
  });

  it("should return false for URLs with different subdomains", () => {
    const differentSubdomainUrl = `https://subdomain.${new URL(SITE_BASE_URL).hostname}`;
    expect(isInternalUrl(differentSubdomainUrl)).toBe(false);
  });

  it("should return true for URLs with the same hostname but different protocols", () => {
    const differentProtocolUrl = `http://${new URL(SITE_BASE_URL).hostname}`;
    expect(isInternalUrl(differentProtocolUrl)).toBe(true);
  });
});
