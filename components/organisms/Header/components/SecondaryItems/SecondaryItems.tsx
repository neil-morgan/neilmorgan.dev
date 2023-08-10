"use client";

import { SecondaryItemsWrapper } from "./styles";
import { Icon, IconButton } from "@/components/atoms";
import { ThemeToggle } from "@/components/molecules";

export const SecondaryItems = () => (
  <SecondaryItemsWrapper>
    <IconButton href="/" icon={<Icon name="github" />} priority="nav" />
    <IconButton href="/" icon={<Icon name="linkedIn" />} priority="nav" />
    <ThemeToggle />
  </SecondaryItemsWrapper>
);
