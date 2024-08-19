import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StitchesRegistryProvider } from "./StitchesRegistryProvider";

describe("StitchesRegistryProvider", () => {
  it("renders children when mounted", async () => {
    render(
      <StitchesRegistryProvider>
        <div data-testid="child">Hello World</div>
      </StitchesRegistryProvider>,
    );

    await waitFor(() =>
      expect(screen.getByTestId("child")).toBeInTheDocument(),
    );
  });

  it("inserts style tags ", async () => {
    render(
      <StitchesRegistryProvider>
        <div data-testid="child">Hello World</div>
      </StitchesRegistryProvider>,
    );

    expect(document.querySelectorAll("style").length).toBe(2);
  });
});
