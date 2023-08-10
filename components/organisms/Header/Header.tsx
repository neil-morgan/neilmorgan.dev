"use client";

import { useState, useEffect } from "react";
import type { HeaderProps } from "./types";
import { HeaderContent, HeaderElement } from "./styles";
import { DesktopNav, MobileNav } from "./containers";
import { Container } from "@/components/atoms";
import { Logo } from "@/components/molecules";
import { useMediaQuery } from "@/hooks";
import { BREAKPOINTS } from "@/constants";

export const Header = ({ navigation, social }: HeaderProps) => {
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
              items={navigation}
              social={social}
              openItem={openItem}
              setOpenItem={setOpenItem}
            />
          ) : (
            <MobileNav
              items={navigation}
              openItem={openItem}
              setOpenItem={setOpenItem}
            />
          )}
        </HeaderContent>
      </Container>
    </HeaderElement>
  );
};
