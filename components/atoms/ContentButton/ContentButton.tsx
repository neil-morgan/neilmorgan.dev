"use client";

import {
  useEffect,
  useRef,
  type RefObject,
  type PropsWithChildren,
} from "react";
import NextLink from "next/link";
import { Icon } from "../Icon";
import { Wrapper } from "./styles";
import type { ContentButtonProps } from "./types";
import { useElementRefs } from "@/providers";
import { isInternalUrl } from "@/utils";

export const ContentButton = ({
  href,
  children,
}: PropsWithChildren<ContentButtonProps>) => {
  const { elementRefs, addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(
    () => addElementRef(elementRef.current),
    [addElementRef, elementRefs],
  );

  return (
    <NextLink href={href as string} passHref legacyBehavior>
      <Wrapper
        ref={elementRef as RefObject<HTMLAnchorElement>}
        {...(!isInternalUrl(href) && { target: "_blank" })}>
        <Icon name="ArrowTopRight" css={{ flexShrink: 0 }} className="arrow" />
        {children}
      </Wrapper>
    </NextLink>
  );
};
