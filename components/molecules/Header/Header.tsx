"use client";

import { Container, Logo } from "@/components/atoms";
import { Navigation } from "../../organisms/Navigation/Navigation";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderElement, Content } from "./styles";
import type { HeaderProps } from "./types";
import { useMediaQuery } from "@/hooks";
import { BREAKPOINTS } from "@/constants";

export const Header = ({ navigation }: HeaderProps) => {
  const isNotMobile = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);

  return (
    <HeaderElement>
      <Container>
        <Content>
          <Logo isLink />
          <Navigation items={navigation} isNotMobile={isNotMobile} />
          {isNotMobile && <ThemeToggle />}
        </Content>
      </Container>
    </HeaderElement>
  );
};
