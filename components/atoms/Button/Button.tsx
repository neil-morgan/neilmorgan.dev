import NextLink from "next/link";
import type { ButtonProps } from "./types";
import { ButtonElement, LeftIcon, RightIcon } from "./styles";
import { ConditionalWrapper } from "@/components/atoms";

export const Button = ({
  children,
  css,
  href,
  onClick,
  isExternal,
  rightIcon,
  leftIcon,
  size,
  priority,
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
      <ButtonElement
        as={href ? "a" : "button"}
        css={css}
        onClick={onClick}
        size={size}
        priority={priority}>
        {leftIconComponent} {children} {rightIconComponent}
      </ButtonElement>
    </ConditionalWrapper>
  );
};
