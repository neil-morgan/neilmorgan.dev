"use client";

import { PopoverSection } from "../../styles";
import { SecondaryItems } from "../../components";
import { Item, List, Wrapper } from "./styles";
import type { DesktopNavProps } from "./types";
import { Popover, Button, IconButton, Link } from "@/components/atoms";
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
              anchor={
                <IconButton
                  icon="ChevronDown"
                  noHighlight
                  onClick={() => setOpenItem(i)}
                />
              }>
              <PopoverSection columns={2}>
                {list.options.map(({ title, slug }, i) => (
                  <Button key={i} size="sm" href={slug} link noHighlight>
                    {title}
                  </Button>
                ))}
              </PopoverSection>
            </Popover>
          )}
        </Item>
      ))}
    </List>
    <SecondaryItems items={social} />
  </Wrapper>
);
