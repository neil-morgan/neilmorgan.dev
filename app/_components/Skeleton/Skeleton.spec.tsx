import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";
import styles from "./Skeleton.module.css";

afterEach(cleanup);

describe("Skeleton", () => {
  it("shares the shimmer class and accepts caller dimensions", () => {
    const { container } = render(
      <Skeleton className="card-placeholder" style={{ height: "18rem" }} />,
    );
    const skeleton = container.firstElementChild;
    expect(skeleton).toHaveClass(
      styles.skeleton,
      styles.shimmer,
      "card-placeholder",
    );
    expect(skeleton).toHaveStyle({ height: "18rem" });
    expect(skeleton).toHaveAttribute("aria-hidden", "true");
  });
});
