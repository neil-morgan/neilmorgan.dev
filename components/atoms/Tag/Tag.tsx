"use client";

import Link from "next/link";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { TagElement } from "./styles";
import type { TagProps } from "./types";

export const Tag = ({ children, slug, css }: TagProps) => {
  return (
    <ConditionalWrapper
      if={Boolean(slug)}
      wrapWith={children => <Link href={slug as string}>{children}</Link>}>
      <TagElement css={css}>{children}</TagElement>
    </ConditionalWrapper>
  );
};
