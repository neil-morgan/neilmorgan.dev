import { cookies, draftMode } from "next/headers";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { safeDraftModeCheck } from "./safe-draft-mode-check";
import { updatePreviewConfig } from "./update-preview-config";

vi.mock("next/headers", () => ({
  cookies: vi.fn(),
  draftMode: vi.fn(),
}));

vi.mock("./safe-draft-mode-check", () => ({
  safeDraftModeCheck: vi.fn(),
}));

const enable = vi.fn();
const get = vi.fn();
const set = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
  vi.stubEnv("NODE_ENV", "development");
  vi.mocked(safeDraftModeCheck).mockResolvedValue(false);
  vi.mocked(draftMode).mockResolvedValue({
    isEnabled: false,
    enable,
    disable: vi.fn(),
  });
  vi.mocked(cookies).mockResolvedValue({ get, set } as unknown as Awaited<
    ReturnType<typeof cookies>
  >);
});

afterEach(() => vi.unstubAllEnvs());

describe("updatePreviewConfig", () => {
  it("enables draft mode and persists preview on the first development click", async () => {
    await expect(updatePreviewConfig({ previewMode: true })).resolves.toEqual({
      previewMode: true,
    });

    expect(enable).toHaveBeenCalledOnce();
    expect(set).toHaveBeenCalledWith(
      "nm_preview",
      JSON.stringify({ previewMode: true }),
      { httpOnly: true, sameSite: "none", secure: true, path: "/" },
    );
  });

  it("updates an existing draft config without enabling draft mode again", async () => {
    vi.mocked(safeDraftModeCheck).mockResolvedValue(true);
    get.mockReturnValue({ value: JSON.stringify({ previewMode: true }) });

    await expect(updatePreviewConfig({ previewMode: false })).resolves.toEqual({
      previewMode: false,
    });

    expect(draftMode).not.toHaveBeenCalled();
    expect(set).toHaveBeenCalled();
  });

  it("rejects unauthenticated draft activation in production", async () => {
    vi.stubEnv("NODE_ENV", "production");

    await expect(updatePreviewConfig({ previewMode: true })).rejects.toThrow(
      "Draft mode is not enabled",
    );

    expect(draftMode).not.toHaveBeenCalled();
    expect(cookies).not.toHaveBeenCalled();
  });

  it("allows config updates in production when draft mode is already enabled", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.mocked(safeDraftModeCheck).mockResolvedValue(true);

    await expect(updatePreviewConfig({ previewMode: true })).resolves.toEqual({
      previewMode: true,
    });

    expect(enable).not.toHaveBeenCalled();
    expect(set).toHaveBeenCalled();
  });
});
