"use client";

import { ThemeToggleButton, Container } from "../../atoms";
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <ThemeToggleButton />
      </Container>
    </HeaderWrapper>
  );
};
