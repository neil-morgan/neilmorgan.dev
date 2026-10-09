import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { isDraftModeEnabled } from "./is-draft-mode-enabled";
import { safeDraftModeCheck } from "./safe-draft-mode-check";

const { get, cookies } = vi.hoisted(() => ({
  get: vi.fn(),
  cookies: vi.fn(),
}));

vi.mock("next/headers", () => ({ cookies }));

vi.mock("./safe-draft-mode-check", () => ({
  safeDraftModeCheck: vi.fn(),
}));

beforeEach(() => {
  vi.resetAllMocks();
  vi.stubEnv("CONTENTFUL_PREVIEW_ENABLED", "true");
  vi.mocked(safeDraftModeCheck).mockResolvedValue(true);
  cookies.mockResolvedValue({ get });
});

afterEach(() => vi.unstubAllEnvs());

describe("isDraftModeEnabled", () => {
  it("does not activate preview from the environment when draft mode is disabled", async () => {
    vi.mocked(safeDraftModeCheck).mockResolvedValue(false);

    await expect(isDraftModeEnabled()).resolves.toBeNull();
    expect(cookies).not.toHaveBeenCalled();
  });

  it("does not activate preview when the preview cookie is missing", async () => {
    await expect(isDraftModeEnabled()).resolves.toBeNull();
    expect(get).toHaveBeenCalledWith("nm_preview");
  });

  it.each([true, false])(
    "uses the preview cookie setting of %s",
    async (previewMode) => {
      get.mockReturnValue({ value: JSON.stringify({ previewMode }) });

      await expect(isDraftModeEnabled()).resolves.toEqual({ previewMode });
    },
  );

  it("does not activate preview when the cookie has no preview setting", async () => {
    get.mockReturnValue({ value: "{}" });

    await expect(isDraftModeEnabled()).resolves.toEqual({});
  });

  it("falls back to disabled preview for a malformed cookie regardless of the environment", async () => {
    get.mockReturnValue({ value: "invalid json" });

    await expect(isDraftModeEnabled()).resolves.toEqual({ previewMode: false });
  });

  it("falls back to disabled preview when cookies cannot be read regardless of the environment", async () => {
    cookies.mockRejectedValueOnce(new Error("Cookies are unavailable"));

    await expect(isDraftModeEnabled()).resolves.toEqual({ previewMode: false });
  });
});
