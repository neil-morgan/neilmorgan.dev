import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./MobileNavigation.module.css";
import type { ButtonProps } from "../Button/Button.types";
import type { IconButtonProps } from "../IconButton/IconButton.types";

const route = vi.hoisted(() => ({ pathname: "/about" }));

vi.mock("next/navigation", () => ({
  usePathname: () => route.pathname,
}));

vi.mock("@/app/_components", () => ({
  IconButton: ({ icon, onClick }: IconButtonProps) => (
    <button aria-label={icon} onClick={onClick} />
  ),
  Button: ({ label, onClick }: ButtonProps) => (
    <button onClick={onClick}>{label}</button>
  ),
}));

beforeEach(() => {
  route.pathname = "/about";
});

afterEach(cleanup);

const items = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

describe("MobileNavigation", () => {
  it.each(["About", "Blog"])(
    "closes when clicking %s, even without a route change",
    (label) => {
      render(<MobileNavigation items={items} />);

      fireEvent.click(screen.getByRole("button", { name: "menu" }));
      expect(screen.getByRole("navigation").parentElement).toHaveClass(
        styles.open,
      );

      fireEvent.click(screen.getByRole("button", { name: label }));

      expect(screen.getByRole("navigation").parentElement).not.toHaveClass(
        styles.open,
      );
      expect(screen.getByRole("button", { name: "menu" })).toBeInTheDocument();
    },
  );

  it("closes after navigation triggered outside the menu", () => {
    const { rerender } = render(<MobileNavigation items={items} />);
    fireEvent.click(screen.getByRole("button", { name: "menu" }));

    route.pathname = "/";
    rerender(<MobileNavigation items={items} />);

    expect(screen.getByRole("navigation").parentElement).not.toHaveClass(
      styles.open,
    );
  });
});
