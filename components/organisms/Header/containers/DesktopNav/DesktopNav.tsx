"use client";

import { Fragment } from "react";

import { PopoverButton, PopoverSection } from "../../styles";
import { Popover, SecondaryItems } from "../../components";
import {
  DesktopItem,
  DesktopItemHeading,
  DesktopItemLink,
  DesktopLink,
  DesktopList,
} from "./styles";
import type { DesktopNavProps } from "./types";
import { Icon } from "@/components/atoms";

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
          <DesktopLink href={slug}>{title}</DesktopLink>
          {list && (
            <Popover
              open={openItem === i}
              setOpen={setOpenItem}
              anchor={
                <PopoverButton onClick={() => setOpenItem(i)}>
                  <Icon name="ChevronDown" />
                </PopoverButton>
              }>
              <PopoverSection columns={2}>
                {list.options.map(({ title, slug }, i) => (
                  <Fragment key={i}>
                    <DesktopItemLink
                      href={slug}
                      onClick={() => setOpenItem(null)}>
                      <DesktopItemHeading>{title}</DesktopItemHeading>
                    </DesktopItemLink>
                  </Fragment>
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
