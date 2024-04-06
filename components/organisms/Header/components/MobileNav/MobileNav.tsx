import type { MobileNavProps } from "./types";
import { List, Options, Wrapper, Footer } from "./styles";
import { IconButton, Popover, Button } from "@/components/atoms";
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
      open={openItem === 10}
      setOpen={setOpenItem}
      padding="$5"
      anchor={
        <IconButton
          css={{
            marginLeft: "auto",
          }}
          icon="Hamburger"
          onClick={() => setOpenItem(10)}
        />
      }>
      <List>
        {items.map(({ title, slug, options }, i) => (
          <div key={i}>
            <Button
              href={slug}
              size="md"
              onClick={() => setOpenItem(false)}
              asLink>
              {title}
            </Button>
            {options && (
              <Options>
                {options?.map(({ title, slug }, i) => (
                  <Button
                    key={i}
                    asLink
                    href={slug}
                    onClick={() => setOpenItem(false)}>
                    - {title}
                  </Button>
                ))}
              </Options>
            )}
          </div>
        ))}
      </List>

      <Footer>
        {social?.map(({ href, title }, index) =>
          !title ? null : (
            <IconButton key={index} href={href} target="_blank" icon={title} />
          ),
        )}
      </Footer>
    </Popover>
  </Wrapper>
);
