"use client";

import { useState, useEffect } from "react";
import type {
  NavigationProps,
  NavigationItemProps,
  PopoverProps,
} from "./types";
import { Icon } from "@/components/atoms";
import { Root, Anchor, Portal } from "@radix-ui/react-popover";
import {
  List,
  ListItemHeading,
  ListItemLink,
  ListItemText,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  PopoverButton,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "./styles";
import { BREAKPOINTS } from "@/constants";
import { useMediaQuery } from "@/hooks";

export const Navigation = ({ items }: NavigationProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const isNotMobile = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);

  useEffect(() => {
    setOpenItem(null);
  }, [isNotMobile]);

  return (
    <>
      {isNotMobile ? (
        <NavigationMenuList>
          {items.map(({ title, slug, list }, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink href={slug}>{title}</NavigationMenuLink>
              {list && (
                <Popover
                  open={openItem === i}
                  setOpen={setOpenItem}
                  anchor={
                    <PopoverButton onClick={() => setOpenItem(i)}>
                      <Icon name="chevronDown" />
                    </PopoverButton>
                  }>
                  <List>
                    {list.map(({ title, slug }, i) => (
                      <ListItem
                        key={i}
                        href={slug}
                        title={title}
                        onClick={() => setOpenItem(null)}
                      />
                    ))}
                  </List>
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
          <List>asd</List>
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
  <li>
    <ListItemLink href={href} onClick={onClick}>
      <ListItemHeading>{title}</ListItemHeading>
      {description && <ListItemText>{description}</ListItemText>}
    </ListItemLink>
  </li>
);

export const Popover = ({ children, anchor, open, setOpen }: PopoverProps) => {
  const handleClose = () => setOpen && setOpen(null);

  return (
    <Root open={open}>
      <Anchor asChild>{anchor}</Anchor>
      <Portal>
        <PopoverContent
          hideWhenDetached
          sideOffset={5}
          onPointerDownOutside={handleClose}
          onInteractOutside={handleClose}
          onFocusOutside={handleClose}
          onEscapeKeyDown={handleClose}>
          <PopoverBody>{children}</PopoverBody>
          <PopoverArrow />
        </PopoverContent>
      </Portal>
    </Root>
  );
};
