import { Popover, SecondaryItems } from "../../components";
import { PopoverSection } from "../../styles";
import type { MobileNavProps } from "./types";
import { MobileLink, MobileListItem, MobileList } from "./styles";
import { Icon, IconButton, HorizontalSeparator } from "@/components/atoms";

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
        size="lg"
        priority="nav"
        onClick={() => setOpenItem(1)}
        icon={<Icon name="hamburger-thick" />}
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
                  onClick={() => setOpenItem(null)}>
                  {title}
                </MobileListItem>
              ))}
            </MobileList>
          )}
        </div>
      ))}
    </PopoverSection>
    <HorizontalSeparator />
    <PopoverSection as="footer">
      <SecondaryItems items={social} />
    </PopoverSection>
  </Popover>
);
