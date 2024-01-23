"use client";

import { useState } from "react";
import type { HeaderProps } from "./types";
import { HeaderElement } from "./styles";
import { DesktopNav, MobileNav } from "./components";
import { Container } from "@/components/atoms";

export const Header = ({ content }: HeaderProps) => {
  const [openItem, setOpenItem] = useState<number | false>(false);

  return (
    <HeaderElement>
      <Container>
        <DesktopNav
          items={content.navigation}
          social={content.social}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
        <MobileNav
          items={content.navigation}
          social={content.social}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
      </Container>
    </HeaderElement>
  );
};
