import NextLink from "next/link";
import { forwardRef, useEffect, useRef } from "react";
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
      href,
      onClick,
      rightIcon,
      leftIcon,
      iconColor,
      disabled,
      size,
      noHighlight,
      asLink = false,
    }: ButtonProps,
    ref: ButtonElementRefType,
  ) => {
    const { addElementRef } = useElementRefs();
    const elementRef = useRef<HTMLElement | null>(null);
    const isExternalLink = !isInternalUrl(href as string);

    const shouldHighlight = () => {
      if (noHighlight) {
        return false;
      }

      if (asLink) {
        return false;
      }

      return true;
    };

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



    return (
      <ConditionalWrapper
        if={Boolean(href)}
        wrapWith={children => (
          <NextLink href={href as string} passHref legacyBehavior>
            {children}
          </NextLink>
        )}>
        <ButtonElement
          disabled={disabled}
          ref={mergeRefs([elementRef, ref])}
          as={href ? "a" : "button"}
          {...(href &&
            isExternalLink && {
              target: "_blank",
            })}
          css={css}
          onClick={onClick}
          size={size}
          asLink={asLink}
          highlight={shouldHighlight()}>
          {leftIconComponent} {children} {rightIconComponent}
        </ButtonElement>
      </ConditionalWrapper>
    );
  },
);

Button.displayName = "Button";
