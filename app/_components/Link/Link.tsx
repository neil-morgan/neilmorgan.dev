import NextLink from "next/link";

import { isInternalUrl, combineClassNames } from "@/app/_utils";

import styles from "./Link.module.css";

import type { LinkProps } from "./types";

export const Link = ({ target, href, children, className }: LinkProps) => {
  const props = {
    href,
    className: combineClassNames(styles.link, className),
    ...(target && { target }),
  };
  return isInternalUrl(href) ? (
    <NextLink {...props}>{children}</NextLink>
  ) : (
    <a {...props}>{children}</a>
  );
};
