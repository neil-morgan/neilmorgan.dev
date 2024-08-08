import NextLink from "next/link";
import { forwardRef, useEffect, useRef, useMemo } from "react";
import { mergeRefs } from "react-merge-refs";
import type { ButtonProps } from "./types";
import { ButtonElement } from "./styles";
import { ConditionalWrapper, Icon } from "@/components/atoms";
import type { ButtonElementRefType } from "@/service";
import { useElementRefs } from "@/providers";
import { isInternalUrl } from "@/utils";

export const Button = forwardRef(
  (
    {
      children,
      css,
      href = "",
      onClick,
      rightIcon,
      leftIcon,
      iconColor,
      disabled = false,
      size,

      noHighlight = false,
      asLink = false,
    }: ButtonProps,
    ref: ButtonElementRefType,
  ) => {
    const { addElementRef } = useElementRefs();
    const elementRef = useRef<HTMLElement | null>(null);
    const isExternalLink = !isInternalUrl(href ?? "");

    const shouldHighlight = useMemo(
      () => !(noHighlight || asLink),
      [noHighlight, asLink],
    );

    useEffect(() => {
      if (disabled || noHighlight || asLink) return;
      addElementRef(elementRef.current);
    }, [addElementRef, asLink, disabled, noHighlight]);

    const rightIconComponent = rightIcon ? (
      <Icon name={rightIcon} css={{ marginLeft: "0.8em", color: iconColor }} />
    ) : null;

    const leftIconComponent = leftIcon ? (
      <Icon name={leftIcon} css={{ marginRight: "1em", color: iconColor }} />
    ) : null;

    const props = href
      ? {
          as: "a",
          ...(isExternalLink && { href, target: "_blank" }),
        }
      : { as: "button" };

    return (
      <ConditionalWrapper
        if={Boolean(href) && !isExternalLink}
        wrapWith={children => (
          <NextLink href={href as string} passHref legacyBehavior>
            {children}
          </NextLink>
        )}>
        <ButtonElement
          disabled={disabled}
          ref={mergeRefs([elementRef, ref])}
          css={css}
          onClick={onClick}
          size={size}
          asLink={asLink}
          highlight={shouldHighlight}
          {...props}>
          {leftIconComponent}
          {children}
          {rightIconComponent}
        </ButtonElement>
      </ConditionalWrapper>
    );
  },
);

Button.displayName = "Button";
