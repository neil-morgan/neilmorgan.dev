"use client";

import { useState, useEffect, Fragment } from "react";
import type {
  NavigationProps,
  NavigationItemProps,
  PopoverProps,
} from "./types";
import { Icon, Text } from "@/components/atoms";
import { ThemeToggle } from "@/components/molecules/ThemeToggle/ThemeToggle";
import { Root, Anchor, Portal } from "@radix-ui/react-popover";
import {
  ListItemHeading,
  ListItemLink,
  ListItemText,
  NavigationMenuItem,
  DesktopLink,
  NavigationMenuList,
  PopoverButton,
  PopoverWrapper,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  PopoverFooter,
  MobileList,
  MobileLink,
} from "./styles";

export const Navigation = ({ items, isNotMobile }: NavigationProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  useEffect(() => {
    setOpenItem(null);
  }, [isNotMobile]);

  return (
    <>
      {isNotMobile ? (
        <NavigationMenuList>
          {items.map(({ title, slug, list }, i) => (
            <NavigationMenuItem key={i}>
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
                  <PopoverBody columns="2">
                    {list.map(({ title, slug }, i) => (
                      <ListItem
                        key={i}
                        href={slug}
                        title={title}
                        onClick={() => setOpenItem(null)}
                      />
                    ))}
                  </PopoverBody>
                </Popover>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      ) : (
        <Popover
          open={openItem === 1}
          setOpen={setOpenItem}
          anchor={
            <PopoverButton onClick={() => setOpenItem(1)}>
              <Icon name="hamburger-thick" />
            </PopoverButton>
          }>
          <PopoverHeader>
            <Text>Menu</Text>
            <ThemeToggle />
          </PopoverHeader>
          <PopoverBody columns="1">
            {items.map(({ title, slug, list }, i) => (
              <Fragment key={i}>
                <MobileLink href={slug}>{title}</MobileLink>
                {list && (
                  <MobileList>
                    {list.map(({ title, slug }, i) => (
                      <ListItem
                        key={i}
                        href={slug}
                        title={title}
                        onClick={() => setOpenItem(null)}
                      />
                    ))}
                  </MobileList>
                )}
              </Fragment>
            ))}
          </PopoverBody>
          <PopoverFooter>Social links</PopoverFooter>
        </Popover>
      )}
    </>
  );
};

const ListItem = ({
  description,
  title,
  href,
  onClick,
}: NavigationItemProps) => (
  <ListItemLink href={href} onClick={onClick}>
    <ListItemHeading>{title}</ListItemHeading>
    {description && <ListItemText>{description}</ListItemText>}
  </ListItemLink>
);

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
