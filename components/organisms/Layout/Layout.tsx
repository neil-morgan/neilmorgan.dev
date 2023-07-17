import { IconDefs } from "@/components/atoms";
import { Header } from "@/components/molecules/Header";
import { Wrapper, Main } from "./styles";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <IconDefs />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  </>
);
