"use client";

import { Fragment } from "react";

import { PopoverButton, PopoverSection } from "../../styles";
import { Popover, SecondaryItems } from "../../components";
import {
  DesktopItem,
  DesktopItemHeading,
  DesktopItemLink,
  DesktopItemText,
  DesktopLink,
  DesktopList,
} from "./styles";
import type { DesktopNavProps } from "./types";
import { Icon, HorizontalSeparator } from "@/components/atoms";

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
                  <Icon name="chevronDown" />
                </PopoverButton>
              }>
              <PopoverSection columns={list.columns}>
                {list.options.map(({ title, slug, description, icon }, i) => (
                  <Fragment key={i}>
                    <DesktopItemLink
                      href={slug}
                      onClick={() => setOpenItem(null)}>
                      <DesktopItemHeading>
                        {icon && (
                          <Icon name={icon} css={{ marginRight: "$3" }} />
                        )}
                        {title}
                      </DesktopItemHeading>
                      {description && (
                        <DesktopItemText>{description}</DesktopItemText>
                      )}
                    </DesktopItemLink>
                    {list.columns === "1" && i !== list.options.length - 1 && (
                      <HorizontalSeparator size="sm" />
                    )}
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
