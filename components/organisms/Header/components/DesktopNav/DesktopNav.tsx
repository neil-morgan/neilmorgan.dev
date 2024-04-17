"use client";

import { Item, List, Wrapper, SocialItems } from "./styles";
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
    {items.length > 0 && (
      <List>
        {items.map(({ label, slug, options }, i) => (
          <Item key={i}>
            <Button href={slug} size="md">
              {label}
            </Button>
            {options && options.length > 0 && (
              <Popover
                open={openItem === i}
                setOpen={setOpenItem}
                columns={2}
                gap="$6"
                padding="$5"
                anchor={
                  <IconButton
                    icon="ChevronDown"
                    noHighlight
                    onClick={() => setOpenItem(i)}
                  />
                }>
                {options.map(({ label, slug }, i) => (
                  <Button
                    key={i}
                    href={slug}
                    asLink
                    onClick={() => setOpenItem(false)}>
                    {label}
                  </Button>
                ))}
              </Popover>
            )}
          </Item>
        ))}
      </List>
    )}
    <SocialItems>
      {social?.map(({ href, title }, index) =>
        !title ? null : (
          <IconButton key={index} href={href} target="_blank" icon={title} />
        ),
      )}
    </SocialItems>
  </Wrapper>
);
