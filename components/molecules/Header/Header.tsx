"use client";

import { Container, Logo } from "@/components/atoms";
import { Navigation } from "../../organisms/Navigation/Navigation";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderElement, Content } from "./styles";
import type { HeaderProps } from "./types";

export const Header = ({ posts }: HeaderProps) => (
  <HeaderElement>
    <Container>
      <Content>
        <Logo isLink />
        <Navigation posts={posts} />
        <ThemeToggle />
      </Content>
    </Container>
  </HeaderElement>
);
