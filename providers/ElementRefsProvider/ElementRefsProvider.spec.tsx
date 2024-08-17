// ElementRefsProvider.test.tsx
import React from "react";
import { render, screen, act } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { ElementRefsProvider, useElementRefs } from "./ElementRefsProvider";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const TestComponent = () => {
  const {
    elementRefs,
    elementProperties,
    addElementRef,
    updateElementProperties,
  } = useElementRefs();
  return (
    <div>
      <div data-testid="elementRefs">{JSON.stringify(elementRefs)}</div>
      <div data-testid="elementProperties">
        {JSON.stringify(elementProperties)}
      </div>
      <button
        data-testid="addElementRef"
        onClick={() => {
          const mockElement = document.createElement("div");
          mockElement.getBoundingClientRect = jest.fn(() => ({
            top: 10,
            left: 20,
            bottom: 30,
            right: 40,
            height: 0,
            width: 0,
            x: 0,
            y: 0,
            toJSON: () => {},
          }));
          addElementRef(mockElement);
        }}>
        Add Element Ref
      </button>
      <button
        data-testid="updateElementProperties"
        onClick={updateElementProperties}>
        Update Element Properties
      </button>
    </div>
  );
};

describe("ElementRefsProvider", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/test-path");
  });

  it("should provide initial context values", () => {
    render(
      <ElementRefsProvider>
        <TestComponent />
      </ElementRefsProvider>,
    );

    expect(screen.getByTestId("elementRefs").textContent).toBe("[]");
    expect(screen.getByTestId("elementProperties").textContent).toBe("[]");
  });

  it("should add an element reference", () => {
    render(
      <ElementRefsProvider>
        <TestComponent />
      </ElementRefsProvider>,
    );

    act(() => {
      screen.getByTestId("addElementRef").click();
    });

    expect(screen.getByTestId("elementRefs").textContent).not.toBe("[]");
  });

  it("should update element properties", () => {
    render(
      <ElementRefsProvider>
        <TestComponent />
      </ElementRefsProvider>,
    );

    act(() => {
      screen.getByTestId("addElementRef").click();
      screen.getByTestId("updateElementProperties").click();
    });

    expect(screen.getByTestId("elementProperties").textContent).toBe(
      JSON.stringify([{ top: 10, left: 20, bottom: 30, right: 40 }]),
    );
  });

  it("should add and remove event listeners", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = render(
      <ElementRefsProvider>
        <TestComponent />
      </ElementRefsProvider>,
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
