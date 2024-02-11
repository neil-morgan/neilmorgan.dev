"use client";

import { type PropsWithChildren, useState, useEffect } from "react";
import type { CopyButtonProps } from "./types";
import { Button } from "@/components/atoms";
import { useElementRefs } from "@/providers";

export const CopyButton = ({
  value,
  prompt = "Copy Url",
  size = "md",
}: PropsWithChildren<CopyButtonProps>) => {
  const { updateElementProperties } = useElementRefs();
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = (copyMe: string) => {
    navigator.clipboard.writeText(copyMe);
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  useEffect(() => {
    // perhaps becomes inefficient if there are many elements
    updateElementProperties();
  }, [copySuccess, updateElementProperties]);

  return (
    <Button
      onClick={() => copyToClipBoard(value)}
      size={size}
      iconColor={copySuccess ? "$primary1" : "$white"}
      leftIcon={copySuccess ? "Checkmark" : "Copy"}>
      {copySuccess ? "Copied!" : prompt}
    </Button>
  );
};
