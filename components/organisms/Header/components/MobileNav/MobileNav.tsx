import { SecondaryItems } from "..";
import type { MobileNavProps } from "./types";
import { List, Wrapper } from "./styles";
import { IconButton, Separator, Popover, Button } from "@/components/atoms";
import { Logo } from "@/components/molecules";

export const MobileNav = ({
  items,
  social,
  openItem,
  setOpenItem,
}: MobileNavProps) => (
  <Wrapper>
    <Logo isLink />
    <Popover
      open={openItem === 1}
      setOpen={setOpenItem}
      padding="$6"
      anchor={
        <IconButton
          css={{
            marginLeft: "auto",
          }}
          icon="Hamburger"
          onClick={() => setOpenItem(1)}
        />
      }>
      {items.map(({ title, slug, list }, i) => (
        <div key={i}>
          <Button
            href={slug}
            size="md"
            onClick={() => setOpenItem(false)}
            asLink>
            {title}
          </Button>
          {list && (
            <List>
              {list?.options?.map(({ title, slug }, i) => (
                <Button
                  key={i}
                  asLink
                  href={slug}
                  onClick={() => setOpenItem(false)}>
                  {title}
                </Button>
              ))}
            </List>
          )}
        </div>
      ))}
      <Separator size="md" />
      <SecondaryItems items={social} />
    </Popover>
  </Wrapper>
);
