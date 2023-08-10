"use client";

import { useState, useEffect } from "react";
import type { HeaderProps } from "./types";
import { HeaderContent, HeaderElement } from "./styles";
import { DesktopNav, MobileNav } from "./containers";
import { Container, Logo } from "@/components/atoms";
import { useMediaQuery } from "@/hooks";
import { BREAKPOINTS } from "@/constants";

export const Header = ({ items }: HeaderProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);

  useEffect(() => {
    setOpenItem(null);
  }, [isDesktop]);

  return (
    <HeaderElement>
      <Container>
        <HeaderContent>
          <Logo isLink />
          {isDesktop ? (
            <DesktopNav
              items={items}
              openItem={openItem}
              setOpenItem={setOpenItem}
            />
          ) : (
            <MobileNav
              items={items}
              openItem={openItem}
              setOpenItem={setOpenItem}
            />
          )}
        </HeaderContent>
      </Container>
    </HeaderElement>
  );
};
