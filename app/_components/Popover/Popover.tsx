import {
  Root,
  Trigger,
  Portal,
  Content,
  Anchor,
  Arrow,
  Close,
} from "@radix-ui/react-popover";

import { Icon } from "@/app/_components";
import { combineClassNames } from "@/app/_utils";

import styles from "./Popover.module.css";

import type { PopoverProps } from "./Popover.types";

export const Popover = ({
  anchor,
  children,
  showArrow = false,
  showClose = false,
  side = "top",
  trigger,
  className,
}: PopoverProps) => (
  <Root>
    {trigger && <Trigger asChild>{trigger}</Trigger>}
    {anchor && <Anchor asChild>{anchor}</Anchor>}
    <Portal>
      <Content
        collisionPadding={10}
        className={combineClassNames(styles.popover, className)}
        side={side}
        sideOffset={10}
      >
        {children}
        {showClose && (
          <Close className={styles.close} aria-label="Close">
            <Icon name="cross" />
          </Close>
        )}
        {showArrow && <Arrow className={styles.arrow} />}
      </Content>
    </Portal>
  </Root>
);
