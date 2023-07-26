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
  NavigationMenuItem,
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
      <NavigationMenuItem>
        <a href="i am link">Skills</a>
        <NavigationMenuTrigger>
          <CaretDown aria-hidden />
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
      </NavigationMenuItem>

      <NavigationMenuItem>
        <a href="i am link">Posts</a>
        <NavigationMenuTrigger>
          <CaretDown aria-hidden />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <List layout="two">
            {posts.map((post, i) => (
              <ListItem key={i} href={post.slug} title={post.title} />
            ))}
          </List>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="https://github.com/radix-ui">
          Github
        </NavigationMenuLink>
      </NavigationMenuItem>

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
