import { beforeEach, describe, expect, it, vi } from "vitest";

import { GET } from "./route";

const { disable, deleteCookie, redirect } = vi.hoisted(() => ({
  disable: vi.fn(),
  deleteCookie: vi.fn(),
  redirect: vi.fn(),
}));

vi.mock("next/headers", () => ({
  draftMode: vi.fn(async () => ({ disable })),
  cookies: vi.fn(async () => ({ delete: deleteCookie })),
}));

vi.mock("next/navigation", () => ({ redirect }));

beforeEach(() => vi.clearAllMocks());

describe("disable draft mode", () => {
  it.each([
    ["", "/"],
    ["?redirect=/test-page", "/test-page"],
  ])(
    "clears the preview cookie and redirects for %s",
    async (query, destination) => {
      await GET(new Request(`http://localhost:3000/api/disable-draft${query}`));

      expect(disable).toHaveBeenCalledOnce();
      expect(deleteCookie).toHaveBeenCalledExactlyOnceWith("nm_preview");
      expect(redirect).toHaveBeenCalledExactlyOnceWith(destination);
    },
  );
});
