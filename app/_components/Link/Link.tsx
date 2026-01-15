import NextLink from "next/link";

import { isInternalUrl } from "@/app/_utils";

import styles from "./Link.module.css";

import type { LinkProps } from "./types";

export const Link = ({ target, href, children }: LinkProps) => {
  const props = {
    href,
    className: styles.link,
    ...(target && { target }),
  };
  return isInternalUrl(href) ? (
    <NextLink {...props}>{children}</NextLink>
  ) : (
    <a {...props}>{children}</a>
  );
};
