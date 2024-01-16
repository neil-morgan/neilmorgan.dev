import NextLink from "next/link";
import { forwardRef, useRef, useEffect } from "react";
import { mergeRefs } from "react-merge-refs";
import { ConditionalWrapper } from "../";
import { IconButtonElement } from "./styles";
import type { IconButtonProps } from "./types";
import { Icon } from "@/components/atoms";
import type { ButtonElementRefType } from "@/types";
import { useElementRefs } from "@/providers";

export const IconButton = forwardRef(
  (
    {
      css,
      href,
      onClick,
      isExternal,
      icon,
      children,
      target,
      size,
      disabled,
      noHighlight,
    }: IconButtonProps,
    ref: ButtonElementRefType,
  ) => {
    const { elementRefs, addElementRef } = useElementRefs();
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (noHighlight) return;

      addElementRef(elementRef.current);
    }, [addElementRef, elementRefs, noHighlight]);

    return (
      <ConditionalWrapper
        if={Boolean(href) && !isExternal}
        wrapWith={children => (
          <NextLink
            target={target}
            href={href as string}
            passHref
            legacyBehavior>
            {children}
          </NextLink>
        )}>
        <IconButtonElement
          highlight={!noHighlight}
          disabled={disabled}
          ref={mergeRefs([elementRef, ref])}
          as={href ? "a" : "button"}
          css={css}
          target={target}
          onClick={onClick}
          size={size}>
          {children ? children : icon ? <Icon name={icon} /> : null}
        </IconButtonElement>
      </ConditionalWrapper>
    );
  },
);

IconButton.displayName = "IconButton";
