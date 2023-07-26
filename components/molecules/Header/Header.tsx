"use client";

import { Container, Logo } from "@/components/atoms";
import { Navigation } from "../../organisms/Navigation/Navigation";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderElement, Content } from "./styles";

export const Header = () => (
  <HeaderElement>
    <Container>
      <Content>
        <Logo isLink />
        <Navigation />
        <ThemeToggle />
      </Content>
    </Container>
  </HeaderElement>
);
