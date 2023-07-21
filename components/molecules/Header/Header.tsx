"use client";

import { Container, Logo } from "@/components/atoms";
import { ThemeToggle } from "../ThemeToggle";
import { Wrapper, Content } from "./styles";

export const Header = () => (
  <Wrapper>
    <Container>
      <Content>
        <Logo isLink />
        <ThemeToggle />
      </Content>
    </Container>
  </Wrapper>
);
