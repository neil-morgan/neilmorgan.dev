"use client";

import { useRef, useEffect, useMemo } from "react";

import NextLink from "next/link";

import { mergeRefs } from "react-merge-refs";

import { Icon } from "@/app/_components/Icon";
import { Spinner } from "@/app/_components/Spinner";
import { useElementRefs } from "@/app/_providers/ElementRefsProvider/ElementRefsProvider";
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
  noHighlight = false,
  onClick,
  ref,
  ariaLabel,
  size = "1rem",
  type = "button",
}: IconButtonProps) => {
  const { addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const sizeVariable = createCssSizeVariables(size, sizes);
  const isExternalLink = !isInternalUrl(href ?? "");
  const shouldHighlight = useMemo(() => !noHighlight, [noHighlight]);
  const shouldRenderNextLink = Boolean(href) && !isExternalLink;

  useEffect(() => {
    if (disabled || loading || noHighlight) return;
    addElementRef(elementRef.current);
  }, [addElementRef, disabled, loading, noHighlight]);

  const sharedClassName = combineClassNames(
    styles.button,
    className,
    shouldHighlight && "highlight",
    "highlightable"
  );

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

  if (shouldRenderNextLink) {
    return (
      <NextLink
        aria-busy={loading}
        aria-disabled={loading || disabled}
        aria-label={ariaLabel}
        className={sharedClassName}
        href={href as string}
        onClick={onClick}
        ref={mergeRefs([elementRef as React.RefObject<HTMLAnchorElement>, ref as React.Ref<HTMLAnchorElement>])}
        style={sharedStyle}
        tabIndex={disabled || loading ? -1 : 0}
      >
        {content}
      </NextLink>
    );
  }

  if (isExternalLink && href) {
    const externalAriaLabel = ariaLabel 
      ? `${ariaLabel} (opens in new tab)` 
      : "(opens in new tab)";
      
    return (
      <a
        aria-busy={loading}
        aria-disabled={loading || disabled}
        aria-label={externalAriaLabel}
        className={sharedClassName}
        href={href}
        onClick={onClick}
        ref={mergeRefs([elementRef as React.RefObject<HTMLAnchorElement>, ref as React.Ref<HTMLAnchorElement>])}
        rel="noopener noreferrer"
        style={sharedStyle}
        tabIndex={disabled || loading ? -1 : 0}
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-busy={loading}
      aria-disabled={loading || disabled}
      aria-label={ariaLabel}
      className={sharedClassName}
      disabled={loading || disabled}
      onClick={onClick}
      ref={mergeRefs([elementRef as React.RefObject<HTMLButtonElement>, ref as React.Ref<HTMLButtonElement>])}
      style={sharedStyle}
      type={type}
    >
      {content}
    </button>
  );
};
