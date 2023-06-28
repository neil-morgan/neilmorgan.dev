"use client";

import { ThemeToggleButton, Logo } from "../../atoms";
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo isLink />
      <ThemeToggleButton />
    </HeaderWrapper>
  );
};
