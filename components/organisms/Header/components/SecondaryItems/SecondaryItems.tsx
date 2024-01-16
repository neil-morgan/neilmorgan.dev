"use client";

import { SecondaryItemsWrapper } from "./styles";
import type { SecondaryItemsProps } from "./types";
import { IconButton } from "@/components/atoms";

export const SecondaryItems = ({ items }: SecondaryItemsProps) => (
  <SecondaryItemsWrapper>
    {items.map(({ href, title }, index) =>
      !title ? null : (
        <IconButton key={index} href={href} target="_blank" icon={title} />
      ),
    )}
  </SecondaryItemsWrapper>
);
