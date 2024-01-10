"use client";

import { Fragment } from "react";
import { PopoverSection } from "../../styles";
import { SecondaryItems } from "../../components";
import {
  DesktopItem,
  DesktopItemHeading,
  DesktopItemLink,
  DesktopList,
} from "./styles";
import type { DesktopNavProps } from "./types";
import { Popover, Button, IconButton, Link } from "@/components/atoms";

export const DesktopNav = ({
  items,
  social,
  openItem,
  setOpenItem,
}: DesktopNavProps) => (
  <>
    <DesktopList>
      {items.map(({ title, slug, list }, i) => (
        <DesktopItem key={i}>
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
        </DesktopItem>
      ))}
    </DesktopList>
    <SecondaryItems items={social} />
  </>
);
