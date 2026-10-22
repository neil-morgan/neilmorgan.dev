import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import interactionStyles from "../Interaction/Interaction.module.css";
import { IconButton } from "./IconButton";
import styles from "./IconButton.module.css";

vi.mock("@/app/_components", async () => ({
  Interaction: (await import("../Interaction/Interaction")).Interaction,
  Spinner: () => <span data-testid="loading" />,
  Icon: () => <span data-testid="icon" />,
}));

afterEach(cleanup);

describe.each([undefined, "/about", "https://example.com"])(
  "IconButton border with href %s",
  (href) => {
    const role = href ? "link" : "button";

    it("is borderless by default and supports toggling borders on and off", () => {
      const { rerender } = render(
        <IconButton href={href} icon="chat" ariaLabel="Chat" />,
      );
      expect(screen.getByRole(role)).toHaveClass(styles.borderless);

      rerender(<IconButton href={href} icon="chat" ariaLabel="Chat" border />);
      expect(screen.getByRole(role)).not.toHaveClass(styles.borderless);

      rerender(
        <IconButton href={href} icon="chat" ariaLabel="Chat" border={false} />,
      );
      expect(screen.getByRole(role)).toHaveClass(
        styles.borderless,
        interactionStyles.interaction,
      );
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it.each(["disabled", "loading"] as const)(
      "retains borderless styling while %s",
      (state) => {
        render(
          <IconButton
            href={href}
            icon="chat"
            ariaLabel="Chat"
            border={false}
            disabled={state === "disabled"}
            loading={state === "loading"}
          />,
        );
        expect(screen.getByRole(role)).toHaveClass(styles.borderless);
        expect(screen.getByRole(role)).toHaveAttribute("aria-disabled", "true");
        if (href)
          expect(screen.getByRole(role)).toHaveAttribute("tabindex", "-1");
        else expect(screen.getByRole(role)).toBeDisabled();
        if (state === "loading") {
          expect(screen.getByRole(role)).toHaveAttribute("aria-busy", "true");
          expect(screen.getByTestId("loading")).toBeInTheDocument();
          expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
        }
      },
    );
  },
);
