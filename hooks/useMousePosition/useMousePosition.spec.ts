import { renderHook, act } from "@testing-library/react";
import { useMousePosition } from "./useMousePosition";

describe("useMousePosition", () => {
  it("should initialize with null values", () => {
    const { result } = renderHook(() => useMousePosition());

    expect(result.current).toEqual({ x: null, y: null });
  });

  it("should update mouse position on mousemove event", () => {
    const { result } = renderHook(() => useMousePosition());

    act(() => {
      window.dispatchEvent(
        new MouseEvent("mousemove", { clientX: 100, clientY: 200 }),
      );
    });

    expect(result.current).toEqual({ x: 100, y: 200 });
  });

  it("should remove event listener on unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useMousePosition());

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function),
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
