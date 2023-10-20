"use client";

import { SecondaryItemsWrapper } from "./styles";
import type { SecondaryItemsProps } from "./types";
import { Icon, IconButton } from "@/components/atoms";
import { ThemeToggle } from "@/components/molecules";

export const SecondaryItems = ({ items }: SecondaryItemsProps) => (
  <SecondaryItemsWrapper>
    {items.map(({ href, title }, index) => (
      <IconButton
        key={index}
        href={href}
        target="_blank"
        icon={<Icon name={title as string} />}
        priority="contrast"
      />
    ))}
    <ThemeToggle />
  </SecondaryItemsWrapper>
);
