"use client";

import type { PropsWithChildren } from "react";
import { Root, Trigger, Portal } from "@radix-ui/react-popover";
import { PopoverArrow, PopoverContent, PopoverWrapper } from "./styles";

export const Popover = ({
  children,
  trigger,
}: PropsWithChildren<{ trigger?: React.ReactNode }>) => {
  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <PopoverWrapper>
          <PopoverContent>
            {children}
            <PopoverArrow />
          </PopoverContent>
        </PopoverWrapper>
      </Portal>
    </Root>
  );
};
