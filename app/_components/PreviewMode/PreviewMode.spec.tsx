import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  isDraftModeEnabled,
  updatePreviewConfig,
} from "@/app/_helpers/preview-mode";

import { PreviewMode } from "./PreviewMode";
import { PreviewModeServer } from "./index";

vi.mock("@/app/_helpers/preview-mode", () => ({
  isDraftModeEnabled: vi.fn(),
  updatePreviewConfig: vi.fn(),
}));

vi.mock("@/app/_components", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid={name} />,
  Spinner: () => <span data-testid="loading" />,
}));

afterEach(cleanup);
afterEach(() => vi.unstubAllEnvs());

beforeEach(() => {
  vi.mocked(isDraftModeEnabled).mockReset();
  vi.mocked(updatePreviewConfig).mockReset();
});

describe("PreviewModeServer visibility", () => {
  it("never renders in production even with preview enabled", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.mocked(isDraftModeEnabled).mockResolvedValue({ previewMode: true });

    expect(await PreviewModeServer()).toBeNull();
    expect(isDraftModeEnabled).not.toHaveBeenCalled();
  });

  it("renders in development when draft mode is enabled", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.mocked(isDraftModeEnabled).mockResolvedValue({ previewMode: true });

    const menu = await PreviewModeServer();
    expect(menu).not.toBeNull();
    render(menu);

    expect(
      screen.getByRole("checkbox", { name: "Preview mode" }),
    ).toBeChecked();
  });

  it("renders in development when draft mode is disabled", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.mocked(isDraftModeEnabled).mockResolvedValue(null);

    render(await PreviewModeServer());

    expect(
      screen.getByRole("checkbox", { name: "Preview mode" }),
    ).not.toBeChecked();
  });
});

describe("PreviewMode toggle", () => {
  it("enables preview on the first click without a draft config", async () => {
    vi.mocked(updatePreviewConfig).mockResolvedValue({ previewMode: true });

    render(<PreviewMode previewConfig={null} environmentId="master" />);

    const checkbox = screen.getByRole("checkbox", { name: "Preview mode" });
    fireEvent.click(checkbox);

    expect(updatePreviewConfig).toHaveBeenCalledWith({ previewMode: true });
    await waitFor(() => expect(checkbox).toBeChecked());
    expect(checkbox).toBeEnabled();
  });

  it.each([true, false])(
    "shows and toggles the preview icon when preview is %s",
    async (previewMode) => {
      vi.mocked(updatePreviewConfig).mockResolvedValue({
        previewMode: !previewMode,
      });

      render(
        <PreviewMode previewConfig={{ previewMode }} environmentId="master" />,
      );

      const checkbox = screen.getByRole("checkbox", { name: "Preview mode" });
      expect(checkbox).toHaveProperty("checked", previewMode);
      expect(
        screen.getByTestId(previewMode ? "eyeOpen" : "eyeNone"),
      ).toBeInTheDocument();

      fireEvent.click(checkbox);

      expect(updatePreviewConfig).toHaveBeenCalledWith({
        previewMode: !previewMode,
      });
      expect(checkbox).toBeDisabled();
      expect(screen.getByTestId("loading")).toBeInTheDocument();

      await waitFor(() => expect(checkbox).toBeEnabled());
      expect(checkbox).toHaveProperty("checked", !previewMode);
      expect(
        screen.getByTestId(previewMode ? "eyeNone" : "eyeOpen"),
      ).toBeInTheDocument();
    },
  );
});
