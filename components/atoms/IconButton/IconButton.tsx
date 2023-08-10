import NextLink from "next/link";
import { forwardRef } from "react";
import { ConditionalWrapper } from "../";
import { IconButtonElement } from "./styles";
import type { IconButtonProps, IconButtonRef } from "./types";

export const IconButton = forwardRef(
  (
    {
      css,
      href,
      onClick,
      isExternal,
      icon,
      children,
      size,
      priority,
    }: IconButtonProps,
    ref: IconButtonRef,
  ) => (
    <ConditionalWrapper
      if={Boolean(href) && !isExternal}
      wrapWith={children => (
        <NextLink href={href as string} passHref legacyBehavior>
          {children}
        </NextLink>
      )}>
      <IconButtonElement
        ref={ref}
        as={href ? "a" : "button"}
        css={css}
        onClick={onClick}
        size={size}
        priority={priority}>
        {children ? children : icon}
      </IconButtonElement>
    </ConditionalWrapper>
  ),
);

IconButton.displayName = "IconButton";