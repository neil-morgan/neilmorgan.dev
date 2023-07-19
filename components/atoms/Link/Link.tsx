import NextLink from "next/link";
import { StyledLink } from "./styles";
import type { LinkProps } from "./types";

export const Link = ({ isExternal, href, children }: LinkProps) => (
  <StyledLink href={href} as={isExternal ? "a" : NextLink}>
    {children}
  </StyledLink>
);
