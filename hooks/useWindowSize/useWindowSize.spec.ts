import { renderHook, act } from "@testing-library/react";
import { useWindowSize } from "./useWindowSize";

describe("useWindowSize", () => {
  it("should initialize with window dimensions", () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  it("should update window size on resize event", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 1024;
      window.innerHeight = 768;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 1024,
      height: 768,
    });
  });

  it("should remove event listener on unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useWindowSize());

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
