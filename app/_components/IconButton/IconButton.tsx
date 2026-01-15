"use client";

import NextLink from "next/link";

import { Icon, Spinner, Interaction } from "@/app/_components";
import { type CssSizeConfigType } from "@/app/_styles";
import {
  combineClassNames,
  isInternalUrl,
  createCssSizeVariables,
} from "@/app/_utils";

import styles from "./IconButton.module.css";

import type { IconButtonProps } from "./IconButton.types";

const sizes: CssSizeConfigType = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
};

export const IconButton = ({
  className,
  disabled = false,
  href = "",
  icon,
  iconSize = 1,
  loading = false,
  onClick,
  ref,
  ariaLabel,
  size = "1rem",
  type = "button",
}: IconButtonProps) => {
  const sizeVariable = createCssSizeVariables(size, sizes);
  const isExternalLink = !isInternalUrl(href ?? "");
  const shouldRenderNextLink = Boolean(href) && !isExternalLink;
  const sharedClassName = combineClassNames(styles.button, className);

  const sharedStyle = {
    ...sizeVariable,
    ...(iconSize && { "--iconSize": `${iconSize}` }),
  };

  const content = (
    <>
      {loading && <Spinner style={sizeVariable} className={styles.spinner} />}
      {icon && !loading && (
        <Icon style={sizeVariable} className={styles.icon} name={icon} />
      )}
    </>
  );

  return (
    <Interaction>
      {shouldRenderNextLink ? (
        <NextLink
          aria-busy={loading}
          aria-disabled={loading || disabled}
          aria-label={ariaLabel}
          className={sharedClassName}
          href={href as string}
          onClick={onClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={sharedStyle}
          tabIndex={disabled || loading ? -1 : 0}
        >
          {content}
        </NextLink>
      ) : isExternalLink && href ? (
        <a
          aria-busy={loading}
          aria-disabled={loading || disabled}
          aria-label={
            ariaLabel ? `${ariaLabel} (opens in new tab)` : "(opens in new tab)"
          }
          className={sharedClassName}
          href={href}
          onClick={onClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          rel="noopener noreferrer"
          style={sharedStyle}
          tabIndex={disabled || loading ? -1 : 0}
          target="_blank"
        >
          {content}
        </a>
      ) : (
        <button
          aria-busy={loading}
          aria-disabled={loading || disabled}
          aria-label={ariaLabel}
          className={sharedClassName}
          disabled={loading || disabled}
          onClick={onClick}
          ref={ref as React.Ref<HTMLButtonElement>}
          style={sharedStyle}
          type={type}
        >
          {content}
        </button>
      )}
    </Interaction>
  );
};
