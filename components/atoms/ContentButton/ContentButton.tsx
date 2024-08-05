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
import { ConditionalWrapper } from "@/components/atoms";

export const ContentButton = ({
  href,
  children,
}: PropsWithChildren<ContentButtonProps>) => {
  const { elementRefs, addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLElement | null>(null);
  const internalUrl = isInternalUrl(href as string);

  useEffect(() => {
    if (!href) {
      return;
    }
    addElementRef(elementRef.current);
  }, [addElementRef, elementRefs, href]);

  return (
    <ConditionalWrapper
      if={Boolean(href)}
      wrapWith={children =>
        internalUrl ? (
          <NextLink href={href as string} passHref legacyBehavior>
            {children}
          </NextLink>
        ) : (
          <a href={href as string} target="_blank">
            {children}
          </a>
        )
      }>
      <Wrapper
        hover={Boolean(href)}
        ref={elementRef as RefObject<HTMLAnchorElement>}
        {...(href && !internalUrl && { target: "_blank" })}>
        {href && (
          <Icon
            size="sm"
            name="ArrowTopRight"
            css={{ flexShrink: 0 }}
            className="arrow"
          />
        )}
        {children}
      </Wrapper>
    </ConditionalWrapper>
  );
};
