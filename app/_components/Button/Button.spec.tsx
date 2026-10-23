import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import interactionStyles from "../Interaction/Interaction.module.css";
import { Button } from "./Button";
import styles from "./Button.module.css";

vi.mock("@/app/_components", async () => ({
  Interaction: (await import("../Interaction/Interaction")).Interaction,
  Spinner: () => <span data-testid="loading" />,
  Icon: () => <span />,
}));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe.each([undefined, "/about", "https://example.com"])(
  "Button layout with href %s",
  (href) => {
    const role = href ? "link" : "button";

    it("defaults to centered, content-sized layout", () => {
      render(<Button href={href} label="Continue" />);

      expect(screen.getByRole(role)).toHaveClass(
        styles["width-content"],
        styles["align-center"],
      );
      expect(screen.getByRole(role)).toHaveStyle({ alignSelf: "flex-start" });
      expect(screen.getByRole(role)).not.toHaveClass(
        styles["align-left"],
        styles["align-right"],
      );
    });

    it.each(["flex-start", "flex-end", "center", "stretch"] as const)(
      "supports alignSelf %s",
      (alignSelf) => {
        render(<Button href={href} label="Continue" alignSelf={alignSelf} />);

        expect(screen.getByRole(role)).toHaveStyle({ alignSelf });
      },
    );

    it.each(["left", "center", "right"] as const)(
      "supports %s alignment at full width",
      (align) => {
        render(
          <Button href={href} label="Continue" align={align} width="full" />,
        );

        expect(screen.getByRole(role)).toHaveClass(styles["width-full"]);
        expect(screen.getByRole(role)).toHaveClass(styles[`align-${align}`]);
      },
    );

    it("is borderless by default and allows toggling borders on and off", () => {
      const { rerender } = render(<Button href={href} label="Continue" />);
      expect(screen.getByRole(role)).toHaveClass(styles.borderless);

      rerender(<Button href={href} label="Continue" border />);
      expect(screen.getByRole(role)).not.toHaveClass(styles.borderless);

      rerender(<Button href={href} label="Continue" border={false} />);
      expect(screen.getByRole(role)).toHaveClass(
        styles.borderless,
        interactionStyles.interaction,
      );
    });

    it.each(["disabled", "loading", "primary"] as const)(
      "supports borderless buttons while %s",
      (state) => {
        render(
          <Button
            href={href}
            label="Continue"
            border={false}
            disabled={state === "disabled"}
            loading={state === "loading"}
            primary={state === "primary"}
          />,
        );
        expect(screen.getByRole(role)).toHaveClass(styles.borderless);
        if (state !== "primary") {
          expect(screen.getByRole(role)).toHaveAttribute(
            "aria-disabled",
            "true",
          );
        }
      },
    );

    it("keeps alignment and width while disabled or loading", () => {
      const { rerender } = render(
        <Button
          href={href}
          label="Continue"
          align="left"
          width="full"
          disabled
        />,
      );

      expect(screen.getByRole(role)).toHaveClass(
        styles["align-left"],
        styles["width-full"],
      );

      rerender(
        <Button
          href={href}
          label="Continue"
          align="right"
          width="full"
          loading
          loadingText="Loading"
          loadingPlacement="left"
        />,
      );

      expect(screen.getByRole(role)).toHaveClass(
        styles["align-right"],
        styles["width-full"],
      );
      expect(screen.getByRole(role)).toHaveAttribute("aria-busy", "true");
      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });
  },
);

describe.each(["/about", "https://example.com", "#section"])(
  "Button link to %s",
  (href) => {
    it.each(["disabled", "loading"] as const)(
      "blocks navigation and callbacks while %s",
      (state) => {
        const onClick = vi.fn();
        const onParentClick = vi.fn();

        render(
          <div onClick={onParentClick}>
            <Button
              href={href}
              label="Continue"
              onClick={onClick}
              disabled={state === "disabled"}
              loading={state === "loading"}
            />
          </div>,
        );

        const link = screen.getByRole("link", { name: "Continue" });
        const getElementById = vi.spyOn(document, "getElementById");

        expect(link.tagName).toBe("A");
        expect(link).not.toHaveAttribute("href");
        expect(link).toHaveAttribute("aria-disabled", "true");
        expect(link).toHaveAttribute("tabindex", "-1");
        expect(fireEvent.click(link)).toBe(false);
        expect(onClick).not.toHaveBeenCalled();
        expect(onParentClick).not.toHaveBeenCalled();
        expect(getElementById).not.toHaveBeenCalled();
      },
    );
  },
);

describe("Button enabled links", () => {
  it("retains interaction styling when a disabled link becomes enabled", () => {
    const { rerender } = render(
      <Button href="/about" label="Continue" disabled />,
    );

    rerender(<Button href="/about" label="Continue" />);

    expect(screen.getByRole("link", { name: "Continue" })).toHaveClass(
      interactionStyles.interaction,
    );
  });

  it("retains the destination for internal links", () => {
    render(<Button href="/about" label="Continue" />);

    const link = screen.getByRole("link", { name: "Continue" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveAttribute("tabindex", "0");
    expect(link).not.toHaveAttribute("aria-disabled", "true");
    expect(link).not.toHaveAttribute("target");
  });

  it("retains new-tab navigation and callbacks for external links", () => {
    const onClick = vi.fn();
    render(
      <Button href="https://example.com" label="Continue" onClick={onClick} />,
    );

    const link = screen.getByRole("link", {
      name: "Continue (opens in new tab)",
    });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
