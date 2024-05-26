import type { MobileNavProps } from "./types";
import { Wrapper } from "./styles";
import { IconButton, Popover } from "@/components/atoms";
import { Logo, NavLists } from "@/components/molecules";

export const MobileNav = ({
  items,
  social,
  openItem,
  setOpenItem,
}: MobileNavProps) => (
  <Wrapper>
    <Logo isLink />
    <Popover
      open={openItem === 10}
      setOpen={setOpenItem}
      padding="$5"
      gap="$6"
      anchor={
        <IconButton
          css={{
            marginLeft: "auto",
          }}
          icon="Hamburger"
          onClick={() => setOpenItem(10)}
        />
      }>
      <NavLists
        lists={[
          { heading: "Pages", items },
          {
            heading: "Links",
            items: social.map(item => ({
              label: item.title as string,
              slug: item.href as string,
            })),
          },
        ]}
      />
    </Popover>
  </Wrapper>
);
