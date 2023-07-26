"use client";

import { forwardRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type {
  NavigationProps,
  NavigationItemProps,
  NavigationItemRef,
} from "./types";

import {
  Arrow,
  CaretDown,
  List,
  ListItemHeading,
  ListItemLink,
  ListItemText,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ViewportPosition,
} from "./styles";

export const Navigation = ({ posts }: NavigationProps) => (
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenu.Item>
        <NavigationMenuTrigger>
          Skills <CaretDown aria-hidden />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <List>
            <ListItem
              href="https://stitches.dev/"
              title="Stitches"
              description="Hello world"
            />
            <ListItem href="/colors" title="Colors" />
            <ListItem href="https://icons.radix-ui.com/" title="Icons" />
          </List>
        </NavigationMenuContent>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenuTrigger>
          Posts <CaretDown aria-hidden />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <List layout="two">
            {posts.map((post, i) => (
              <ListItem key={i} href={post.slug} title={post.title} />
            ))}
          </List>
        </NavigationMenuContent>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenuLink href="https://github.com/radix-ui">
          Github
        </NavigationMenuLink>
      </NavigationMenu.Item>

      <NavigationMenuIndicator>
        <Arrow />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <ViewportPosition>
      <NavigationMenuViewport />
    </ViewportPosition>
  </NavigationMenuRoot>
);

const ListItem = forwardRef(
  (
    { description, title }: NavigationItemProps,
    forwardedRef: NavigationItemRef,
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <ListItemLink ref={forwardedRef}>
          <ListItemHeading>{title}</ListItemHeading>
          {description && <ListItemText>{description}</ListItemText>}
        </ListItemLink>
      </NavigationMenu.Link>
    </li>
  ),
);

ListItem.displayName = "ListItem";
