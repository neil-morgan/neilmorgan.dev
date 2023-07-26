"use client";

import { TagElement } from "./styles";
import type { TagProps } from "./types";
import Link from "next/link";
import { ConditionalWrapper } from "../ConditionalWrapper";

export const Tag = ({ children, slug, css }: TagProps) => {
  return (
    <ConditionalWrapper
      if={Boolean(slug)}
      wrapWith={children => <Link href={slug as string}>{children}</Link>}>
      <TagElement css={css}>{children}</TagElement>
    </ConditionalWrapper>
  );
};
