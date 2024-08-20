import { renderHook, act } from "@testing-library/react";
import { useIntersectionObserver } from "./useIntersectionObserver";

describe("useIntersectionObserver", () => {
  let observe: jest.Mock;
  let disconnect: jest.Mock;

  beforeEach(() => {
    observe = jest.fn();
    disconnect = jest.fn();

    window.IntersectionObserver = jest.fn(function (callback, options) {
      return {
        observe: observe,
        disconnect: disconnect,
        root: null,
        rootMargin: "",
        thresholds: [],
        takeRecords: jest.fn(),
        unobserve: jest.fn(),
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize correctly", () => {
    const { result } = renderHook(() => useIntersectionObserver());

    const [refCallback, entry] = result.current;

    expect(refCallback).toBeInstanceOf(Function);
    expect(entry).toBeNull();
  });

  it("should create an observer and call the callback when an element is observed", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const [refCallback] = result.current;

    const element = document.createElement("div");

    act(() => {
      refCallback(element);
    });

    expect(observe).toHaveBeenCalledWith(element);
  });

  it("should disconnect the observer when the element is unmounted", () => {
    const { result, unmount } = renderHook(() => useIntersectionObserver());
    const [refCallback] = result.current;

    const element = document.createElement("div");

    act(() => {
      refCallback(element);
    });

    expect(observe).toHaveBeenCalledWith(element);

    unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});
