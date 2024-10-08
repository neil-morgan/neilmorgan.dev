import NextLink from "next/link";
import { forwardRef, useRef, useEffect, type MouseEventHandler } from "react";
import { mergeRefs } from "react-merge-refs";
import { ConditionalWrapper } from "../";
import { IconButtonElement } from "./styles";
import type { IconButtonProps } from "./types";
import { Icon } from "@/components/atoms";
import type { ButtonElementRefType, IconType } from "@/service";
import { useElementRefs } from "@/providers";
import { isInternalUrl } from "@/utils";

export const IconButton = forwardRef(
  (
    {
      css,
      href,
      onClick,
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
    const isExternalLink = !isInternalUrl(href as string);

    useEffect(() => {
      if (noHighlight) return;

      addElementRef(elementRef.current);
    }, [addElementRef, elementRefs, noHighlight]);

    return (
      <ConditionalWrapper
        if={Boolean(href)}
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
          {...(href &&
            isExternalLink && {
              target: "_blank",
            })}
          css={css}
          target={target}
          onClick={onClick as MouseEventHandler<HTMLButtonElement>}
          size={size}>
          {children ? children : icon ? <Icon name={icon as IconType} /> : null}
        </IconButtonElement>
      </ConditionalWrapper>
    );
  },
);

IconButton.displayName = "IconButton";
