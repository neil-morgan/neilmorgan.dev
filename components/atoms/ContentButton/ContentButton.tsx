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

  useEffect(() => {
    if (!href) {
      return;
    }
    addElementRef(elementRef.current);
  }, [addElementRef, elementRefs, href]);

  return (
    <ConditionalWrapper
      if={Boolean(href)}
      wrapWith={children => (
        <NextLink href={href as string} passHref legacyBehavior>
          {children}
        </NextLink>
      )}>
      <Wrapper
        hover={Boolean(href)}
        ref={elementRef as RefObject<HTMLAnchorElement>}
        {...(href && !isInternalUrl(href) && { target: "_blank" })}>
        {href && (
          <Icon
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
