"use client";

import { NavListsWrapper } from "./styles";
import type { NavListsProps } from "./types";
import { List, Text, Button } from "@/components/atoms";

export const NavLists = ({ lists }: NavListsProps) => (
  <NavListsWrapper>
    {lists.map(({ heading, items }, i) => (
      <List key={i} gap="$3">
        <Text size={1}>{heading}</Text>
        {items.map(({ label, slug }, i) => (
          <Button asLink href={slug} key={i}>
            {label}
          </Button>
        ))}
      </List>
    ))}
  </NavListsWrapper>
);
