"use client";

import { type PropsWithChildren, useState } from "react";
import type { CopyButtonProps } from "./types";
import { Message } from "./styles";
import { IconButton, Popover, Text, Button } from "@/components/atoms";

export const CopyButton = ({
  value,
  prompt = "Copy Url",
  message = "Copied to clipboard",
  asIcon,
  size = "md",
}: PropsWithChildren<CopyButtonProps>) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = (copyMe: string) => {
    navigator.clipboard.writeText(copyMe);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <Popover
      open={copySuccess}
      side="top"
      anchor={
        asIcon ? (
          <IconButton
            icon="Copy"
            onClick={() => copyToClipBoard(value)}
            size={size}
          />
        ) : (
          <Button
            onClick={() => copyToClipBoard(value)}
            size={size}
            leftIcon="Copy"
            priority="contrast">
            {prompt}
          </Button>
        )
      }>
      <Message>
        <Text size={2} as="span" color="$white">
          {message}
        </Text>
      </Message>
    </Popover>
  );
};
