"use client";

import { SecondaryItems } from "..";
import { Item, List, Wrapper } from "./styles";
import type { DesktopNavProps } from "./types";
import { Popover, Button, IconButton } from "@/components/atoms";
import { Logo } from "@/components/molecules";

export const DesktopNav = ({
  items,
  social,
  openItem,
  setOpenItem,
}: DesktopNavProps) => (
  <Wrapper>
    <Logo isLink />
    <List>
      {items.map(({ title, slug, list }, i) => (
        <Item key={i}>
          <Button href={slug} size="md">
            {title}
          </Button>
          {list && (
            <Popover
              open={openItem === i}
              setOpen={setOpenItem}
              columns={2}
              gap="$6"
              padding="$6"
              anchor={
                <IconButton
                  icon="ChevronDown"
                  noHighlight
                  onClick={() => setOpenItem(i)}
                />
              }>
              {list.options.map(({ title, slug }, i) => (
                <Button key={i} href={slug} asLink>
                  {title}
                </Button>
              ))}
            </Popover>
          )}
        </Item>
      ))}
    </List>
    <SecondaryItems items={social} />
  </Wrapper>
);
