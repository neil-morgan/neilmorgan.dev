"use client";

import { ThemeToggleButton } from "../ThemeToggleButton";
import { Logo } from "../Logo";
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo isLink />
      <ThemeToggleButton />
    </HeaderWrapper>
  );
};
