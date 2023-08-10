"use client";

import { Root, Anchor, Portal } from "@radix-ui/react-popover";
import type { PopoverProps } from "./types";
import { PopoverArrow, PopoverContent, PopoverWrapper } from "./styles";

export const Popover = ({ children, anchor, open, setOpen }: PopoverProps) => {
  const handleClose = () => setOpen && setOpen(null);

  return (
    <Root open={open}>
      <Anchor asChild>{anchor}</Anchor>
      <Portal>
        <PopoverWrapper
          hideWhenDetached
          sideOffset={5}
          onPointerDownOutside={handleClose}
          onInteractOutside={handleClose}
          onFocusOutside={handleClose}
          onEscapeKeyDown={handleClose}>
          <PopoverContent>{children}</PopoverContent>
          <PopoverArrow />
        </PopoverWrapper>
      </Portal>
    </Root>
  );
};
