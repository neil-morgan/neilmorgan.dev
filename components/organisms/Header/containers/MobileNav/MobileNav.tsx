import { SecondaryItems } from "../../components";
import { PopoverSection } from "../../styles";
import type { MobileNavProps } from "./types";
import { MobileLink, MobileListItem, MobileList } from "./styles";
import { IconButton, Separator, Popover } from "@/components/atoms";

export const MobileNav = ({
  items,
  social,
  openItem,
  setOpenItem,
}: MobileNavProps) => (
  <Popover
    open={openItem === 1}
    setOpen={setOpenItem}
    anchor={
      <IconButton
        css={{
          marginLeft: "auto",
        }}
        icon="Hamburger"
        onClick={() => setOpenItem(1)}
      />
    }>
    <PopoverSection columns="1" gap="mobile">
      {items.map(({ title, slug, list }, i) => (
        <div key={i}>
          <MobileLink href={slug}>{title}</MobileLink>
          {list && (
            <MobileList>
              {list.options.map(({ title, slug }, i) => (
                <MobileListItem
                  key={i}
                  href={slug}
                  onClick={() => setOpenItem(false)}>
                  {title}
                </MobileListItem>
              ))}
            </MobileList>
          )}
        </div>
      ))}
    </PopoverSection>
    <Separator />
    <PopoverSection as="footer">
      <SecondaryItems items={social} />
    </PopoverSection>
  </Popover>
);
