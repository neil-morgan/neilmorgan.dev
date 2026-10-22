import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Box } from "./Box";

vi.mock("@/app/_components", () => ({
  Interaction: ({ children }: React.PropsWithChildren) => children,
}));

vi.mock("@/app/_providers", () => ({
  useElementRefs: () => ({ addElementRef: vi.fn() }),
}));

afterEach(cleanup);

describe.each([undefined, "/about", "https://example.com"])(
  "Box styles with href %s",
  (href) => {
    it("omits unset sizes", () => {
      render(<Box href={href}>Content</Box>);

      expect(screen.getByText("Content").getAttribute("style")).toBe(
        "flex-direction: row;",
      );
    });

    it("uses shared sizes with per-side overrides and preserves units", () => {
      render(
        <Box
          href={href}
          padding="2rem"
          paddingTop="0rem"
          paddingRight="12px"
          borderRadius="1rem"
          borderTopLeftRadius="0rem"
          borderBottomRightRadius="8px"
          flexDirection="column"
        >
          Content
        </Box>,
      );

      expect(screen.getByText("Content")).toHaveStyle({
        flexDirection: "column",
        paddingTop: "0rem",
        paddingBottom: "2rem",
        paddingLeft: "2rem",
        paddingRight: "12px",
        borderTopLeftRadius: "0rem",
        borderTopRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "8px",
      });
    });

    it("removes inline sizes when their props are unset", () => {
      const { rerender } = render(
        <Box href={href} padding="2rem" borderRadius="1rem">
          Content
        </Box>,
      );

      rerender(<Box href={href}>Content</Box>);

      expect(screen.getByText("Content").getAttribute("style")).toBe(
        "flex-direction: row;",
      );
    });
  },
);
