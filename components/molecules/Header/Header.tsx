"use client";

import { ThemeToggleButton, Container } from "../../atoms";
import { HeaderWrapper, HeaderContent } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <ThemeToggleButton />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
