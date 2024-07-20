import { render, screen } from "@testing-library/react";
import { Icon, IconDefs } from "./Icon";
import { paths } from "./paths";

const iconTestId = "ArrowRight-testid";

describe("Icon", () => {
  it("renders without crashing", () => {
    render(<Icon name="ArrowRight" />);
    const useElement = screen.getByTestId(iconTestId);
    expect(useElement).toBeInTheDocument();
  });

  it("applies props correctly", () => {
    const { rerender } = render(
      <Icon name="ArrowRight" size="lg" color="red" className="test-class" />,
    );
    let svgElement = screen.getByTestId(iconTestId);
    expect(svgElement).toHaveAttribute("color", "red");
    expect(svgElement).toHaveClass("test-class");

    rerender(<Icon name="ArrowRight" />);
    svgElement = screen.getByTestId(iconTestId);
    expect(svgElement.querySelector("use")).toHaveAttribute(
      "href",
      "#ArrowRight-icon",
    );
  });
});

describe("IconDefs", () => {
  it("renders all paths as SVG definitions", () => {
    render(<IconDefs />);
    paths.forEach(({ name }) =>
      expect(screen.getByTestId(`${name}-testid`)).toBeInTheDocument(),
    );
  });
});
