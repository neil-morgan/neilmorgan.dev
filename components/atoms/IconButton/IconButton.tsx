import NextLink from "next/link";
import { ConditionalWrapper } from "../";
import { IconButtonElement } from "./styles";
import type { IconButtonProps } from "./types";

export const IconButton = ({
  css,
  href,
  onClick,
  isExternal,
  icon,
  children,
  size,
  priority,
}: IconButtonProps) => (
  <ConditionalWrapper
    if={Boolean(href) && !isExternal}
    wrapWith={children => (
      <NextLink href={href as string} passHref legacyBehavior>
        {children}
      </NextLink>
    )}>
    <IconButtonElement
      as={href ? "a" : "button"}
      css={css}
      onClick={onClick}
      size={size}
      priority={priority}>
      {children ? children : icon}
    </IconButtonElement>
  </ConditionalWrapper>
);
