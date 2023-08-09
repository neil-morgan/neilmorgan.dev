"use client";

import { useState, useEffect, Fragment } from "react";
import { Root, Anchor, Portal } from "@radix-ui/react-popover";
import type { HeaderProps, NavigationItemProps, PopoverProps } from "./types";
import {
  DesktopItem,
  DesktopItemHeading,
  DesktopItemLink,
  DesktopItemText,
  DesktopLink,
  DesktopList,
  HeaderContent,
  HeaderElement,
  MobileLink,
  MobileList,
  MobileListItem,
  PopoverArrow,
  PopoverButton,
  PopoverContent,
  PopoverSection,
  PopoverWrapper,
} from "./styles";
import {
  Icon,
  Container,
  Logo,
  IconButton,
  HorizontalSeparator,
} from "@/components/atoms";
import { SocialLinks } from "@/components/molecules";
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
            <>
              <DesktopList>
                {items.map(({ title, slug, list }, i) => (
                  <DesktopItem key={i}>
                    <DesktopLink href={slug}>{title}</DesktopLink>
                    {list && (
                      <Popover
                        open={openItem === i}
                        setOpen={setOpenItem}
                        anchor={
                          <PopoverButton onClick={() => setOpenItem(i)}>
                            <Icon name="chevronDown" />
                          </PopoverButton>
                        }>
                        <PopoverSection columns={list.columns}>
                          {list.options.map(
                            ({ title, slug, description, icon }, i) => (
                              <Fragment key={i}>
                                <DesktopItemLink href={slug}>
                                  <DesktopItemHeading>
                                    {icon && (
                                      <Icon
                                        name={icon}
                                        css={{ marginRight: "$3" }}
                                      />
                                    )}
                                    {title}
                                  </DesktopItemHeading>
                                  {description && (
                                    <DesktopItemText>
                                      {description}
                                    </DesktopItemText>
                                  )}
                                </DesktopItemLink>
                                {list.columns === "1" &&
                                  i !== list.options.length - 1 && (
                                    <HorizontalSeparator size="sm" />
                                  )}
                              </Fragment>
                            ),
                          )}
                        </PopoverSection>
                      </Popover>
                    )}
                  </DesktopItem>
                ))}
              </DesktopList>
              <SocialLinks />
            </>
          ) : (
            <Popover
              open={openItem === 1}
              setOpen={setOpenItem}
              anchor={
                <IconButton
                  size="lg"
                  priority="nav"
                  onClick={() => setOpenItem(1)}
                  icon={<Icon name="hamburger-thick" />}
                />
              }>
              <PopoverSection columns="1" gap="mobile">
                {items.map(({ title, slug, list }, i) => (
                  <div key={i}>
                    <MobileLink href={slug}>{title}</MobileLink>
                    {list && (
                      <MobileList>
                        {list.options.map(({ title, slug }, i) => (
                          <MobileListItem
                            key={i}
                            href={slug}
                            onClick={() => setOpenItem(null)}>
                            {title}
                          </MobileListItem>
                        ))}
                      </MobileList>
                    )}
                  </div>
                ))}
              </PopoverSection>
              <HorizontalSeparator />
              <PopoverSection as="footer">
                <SocialLinks />
              </PopoverSection>
            </Popover>
          )}
        </HeaderContent>
      </Container>
    </HeaderElement>
  );
};

export const Popover = ({ children, anchor, open, setOpen }: PopoverProps) => {
  const handleClose = () => setOpen && setOpen(null);

  return (
    <Root open={open}>
      <Anchor asChild>{anchor}</Anchor>
      <Portal>
        <PopoverWrapper
          hideWhenDetached
          sideOffset={5}
          onPointerDownOutside={handleClose}
          onInteractOutside={handleClose}
          onFocusOutside={handleClose}
          onEscapeKeyDown={handleClose}>
          <PopoverContent>{children}</PopoverContent>
          <PopoverArrow />
        </PopoverWrapper>
      </Portal>
    </Root>
  );
};
