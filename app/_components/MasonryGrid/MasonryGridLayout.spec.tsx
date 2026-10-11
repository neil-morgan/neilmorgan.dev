import type { PropsWithChildren } from "react";
import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("react-responsive-masonry", () => ({
  default: ({ children }: PropsWithChildren) => <div>{children}</div>,
  ResponsiveMasonry: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));

import MasonryGridLayout from "./MasonryGridLayout";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("MasonryGridLayout readiness", () => {
  it("waits for a frame after mounting and cancels it on unmount", () => {
    let frameCallback: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      frameCallback = callback;
      return 123;
    });
    const cancelFrame = vi.spyOn(window, "cancelAnimationFrame");
    const onReady = vi.fn();
    const { unmount } = render(
      <MasonryGridLayout gutter="2rem" responsive={{ 0: 1 }} onReady={onReady}>
        <article>Content</article>
      </MasonryGridLayout>,
    );
    expect(onReady).not.toHaveBeenCalled();
    act(() => frameCallback?.(0));
    expect(onReady).toHaveBeenCalledOnce();
    unmount();
    expect(cancelFrame).toHaveBeenCalledWith(123);
  });
});
