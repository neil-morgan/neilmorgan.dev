"use client";

import { type PropsWithChildren, useState } from "react";
import type { CopyButtonProps } from "./types";
import { Message } from "./styles";
import { IconButton, Popover, Text } from "@/components/atoms";

export const CopyButton = ({
  text,
  message = "Copied to clipboard",
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
      anchor={<IconButton icon="Copy" onClick={() => copyToClipBoard(text)} />}>
      <Message>
        <Text size={0} as="span">
          {message}
        </Text>
      </Message>
    </Popover>
  );
};
