"use client";

import type { SeparatorProps } from "./types";
import { HorizontalSeparator, VerticalSeparator } from "./styles";

export const Separator = ({
  direction = "horizontal",
  size,
}: SeparatorProps) => {
  const props = { size };
  return direction === "horizontal" ? (
    <HorizontalSeparator {...props} />
  ) : (
    <VerticalSeparator {...props} />
  );
};
