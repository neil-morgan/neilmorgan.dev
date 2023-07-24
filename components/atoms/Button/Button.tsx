import type { ButtonProps } from "./types";
import { ButtonElement, LeftIcon, RightIcon } from "./styles";
import NextLink from "next/link";
import { ConditionalWrapper } from "../";

export const Button = ({
  children,
  css,
  href,
  onClick,
  isExternal,
  rightIcon,
  leftIcon,
}: ButtonProps) => {
  const rightIconComponent = rightIcon ? (
    <RightIcon>{rightIcon}</RightIcon>
  ) : null;

  const leftIconComponent = leftIcon ? <LeftIcon>{leftIcon}</LeftIcon> : null;

  return (
    <ConditionalWrapper
      if={Boolean(href) && !isExternal}
      wrapWith={children => (
        <NextLink href={href as string} passHref legacyBehavior>
          {children}
        </NextLink>
      )}>
      <ButtonElement as="a" css={css} onClick={onClick}>
        {leftIconComponent} {children} {rightIconComponent}
      </ButtonElement>
    </ConditionalWrapper>
  );
};
