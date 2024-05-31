"use client";

import type { HeaderProps } from "./types";
import { HeaderElement, DesktopNavList } from "./styles";
import { Container, Button, IconButton, Popover } from "@/components/atoms";
import { Logo, NavLists } from "@/components/molecules";
import { useWindowSize } from "@/hooks";
import { BREAKPOINTS } from "@/lib/site";

export const Header = ({ content }: HeaderProps) => {
  const windowSize = useWindowSize();

  return (
    <Container>
      <HeaderElement>
        <Logo isLink />

        {content.navigation.length > 0 && (
          <>
            {windowSize.width < BREAKPOINTS.lg ? (
              <Popover
                padding="$5"
                gap="$6"
                trigger={
                  <IconButton
                    css={{
                      marginLeft: "auto",
                    }}
                    icon="Hamburger"
                  />
                }>
                <NavLists
                  lists={[
                    { heading: "Pages", items: content.navigation },
                    {
                      heading: "Links",
                      items: content.socialItems.map(item => ({
                        label: item.title as string,
                        slug: item.href as string,
                      })),
                    },
                  ]}
                />
              </Popover>
            ) : (
              <DesktopNavList>
                {content.navigation.map(({ label, slug }, i) => (
                  <Button key={i} href={slug} size="md">
                    {label}
                  </Button>
                ))}
              </DesktopNavList>
            )}
          </>
        )}
      </HeaderElement>
    </Container>
  );
};
