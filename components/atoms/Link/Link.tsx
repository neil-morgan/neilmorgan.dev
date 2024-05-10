import NextLink from "next/link";
import { StyledLink } from "./styles";
import type { LinkProps } from "./types";
import { isInternalUrl } from "@/utils";

export const Link = ({ target, href, children }: LinkProps) => {
  const isExternalLink = !isInternalUrl(href as string);
  return (
    <StyledLink
      href={href}
      as={isExternalLink ? "a" : NextLink}
      {...(href &&
        isExternalLink && {
          target: "_blank",
        })}>
      {children}
    </StyledLink>
  );
};
