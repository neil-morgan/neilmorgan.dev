import { render } from "@testing-library/react";
import { Blockquote } from "./Blockquote";

describe("Blockquote Component", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<Blockquote>Test Quote</Blockquote>);
    expect(getByRole("blockquote")).toBeInTheDocument();
  });

  it("applies default styles correctly", () => {
    const { getByText } = render(<Blockquote>Test Quote</Blockquote>);
    const blockquote = getByText("Test Quote");
    expect(blockquote).toHaveStyle(`padding: var(--space-5)`);
    expect(blockquote).toHaveStyle(`color: var(--colors-bodyText)`);
    expect(blockquote).toHaveStyle(
      `border-left: solid 4px var(--colors-primary1)`,
    );
  });
});
