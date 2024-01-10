import NextLink from "next/link";
import { forwardRef, useEffect, useRef } from "react";
import { mergeRefs } from "react-merge-refs";
import type { ButtonProps } from "./types";
import { ButtonElement } from "./styles";
import { ConditionalWrapper, Icon } from "@/components/atoms";
import type { ButtonElementRefType } from "@/types";
import { useElementRefs } from "@/providers";

export const Button = forwardRef(
  (
    {
      children,
      css,
      href,
      onClick,
      isExternal,
      rightIcon,
      leftIcon,
      size,
      noHighlight,
      asLink = false,
    }: ButtonProps,
    ref: ButtonElementRefType,
  ) => {
    const { elementRefs, addElementRef } = useElementRefs();
    const elementRef = useRef<HTMLElement | null>(null);

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
      if (noHighlight || asLink) return;
      addElementRef(elementRef.current);
    }, [addElementRef, asLink, elementRefs, noHighlight]);

    const rightIconComponent = rightIcon ? (
      <Icon name={rightIcon} css={{ marginLeft: "$2" }} />
    ) : null;

    const leftIconComponent = leftIcon ? (
      <Icon name={leftIcon} css={{ marginRight: "$2" }} />
    ) : null;

    return (
      <ConditionalWrapper
        if={Boolean(href) && !isExternal}
        wrapWith={children => (
          <NextLink href={href as string} passHref legacyBehavior>
            {children}
          </NextLink>
        )}>
        <ButtonElement
          ref={mergeRefs([elementRef, ref])}
          as={href ? "a" : "button"}
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
