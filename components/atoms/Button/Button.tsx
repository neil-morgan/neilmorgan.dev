import NextLink from "next/link";
import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import { ButtonElement } from "./styles";
import { ConditionalWrapper, Icon } from "@/components/atoms";
import type { ButtonElementRefType } from "@/types";

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
      priority,
    }: ButtonProps,
    ref: ButtonElementRefType,
  ) => {
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
          ref={ref}
          as={href ? "a" : "button"}
          css={css}
          onClick={onClick}
          size={size}
          priority={priority}>
          {leftIconComponent} {children} {rightIconComponent}
        </ButtonElement>
      </ConditionalWrapper>
    );
  },
);

Button.displayName = "Button";
