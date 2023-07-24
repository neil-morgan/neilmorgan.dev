"use client";

import { Container, Logo } from "@/components/atoms";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderElement, Content } from "./styles";

export const Header = () => (
  <HeaderElement>
    <Container>
      <Content>
        <Logo isLink />
        <ThemeToggle />
      </Content>
    </Container>
  </HeaderElement>
);
