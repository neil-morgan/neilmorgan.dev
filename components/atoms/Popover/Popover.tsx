"use client";

import type { PropsWithChildren } from "react";
import { Root, Trigger, Portal, Anchor } from "@radix-ui/react-popover";
import { PopoverArrow, PopoverContent, PopoverWrapper } from "./styles";
import type { PopoverProps } from "./types";

export const Popover = ({
  children,
  trigger,
  anchor,
  open,
  setOpen,
  withArrow = false,
  side = "bottom",
  padding = "$3",
  gap,
  columns = 1,
}: PropsWithChildren<PopoverProps>) => {
  const handleClose = () => setOpen && setOpen(false);
  const gridTemplateColumns = Array(columns).fill("1fr").join(" ");

  return (
    <Root open={open}>
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      {anchor && <Anchor asChild>{anchor}</Anchor>}
      <Portal>
        <PopoverWrapper
          hideWhenDetached
          sideOffset={withArrow ? 5 : 15}
          side={side}
          onPointerDownOutside={handleClose}
          onInteractOutside={handleClose}
          onFocusOutside={handleClose}
          onEscapeKeyDown={handleClose}>
          <PopoverContent css={{ padding, gridTemplateColumns, gap }}>
            {children}
            {withArrow && <PopoverArrow />}
          </PopoverContent>
        </PopoverWrapper>
      </Portal>
    </Root>
  );
};
