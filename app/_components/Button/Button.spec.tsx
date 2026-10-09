import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import interactionStyles from "../Interaction/Interaction.module.css";
import { Button } from "./Button";

vi.mock("@/app/_components", async () => ({
  Interaction: (await import("../Interaction/Interaction")).Interaction,
  Spinner: () => <span data-testid="loading" />,
  Icon: () => <span />,
}));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

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
    expect(link).toHaveAttribute("aria-disabled", "false");
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
