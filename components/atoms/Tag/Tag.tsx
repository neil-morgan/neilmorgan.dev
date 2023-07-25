"use client";

import { TagElement } from "./styles";
import type { TagProps } from "./types";

export const Tag = ({ children, css }: TagProps) => {
  return <TagElement css={css}>{children}</TagElement>;
};
