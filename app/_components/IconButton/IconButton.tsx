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
  size = "1rem",
  type = "button",
}: IconButtonProps) => {
  const { addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLButtonElement | null>(null);
  const sizeVariable = createCssSizeVariables(size, sizes);
  const isExternalLink = !isInternalUrl(href ?? "");
  const shouldHighlight = useMemo(() => !noHighlight, [noHighlight]);
  const shouldRenderNextLink = Boolean(href) && !isExternalLink;

  useEffect(() => {
    if (disabled || loading || noHighlight) return;
    addElementRef(elementRef.current);
  }, [addElementRef, disabled, loading, noHighlight]);

  const buttonElement = (
    <button
      ref={mergeRefs([elementRef, ref])}
      className={combineClassNames(
        styles.button,
        className,
        shouldHighlight && "highlight",
        "highlightable"
      )}
      style={{
        ...sizeVariable,
        ...(iconSize && { "--iconSize": `${iconSize}` }),
      }}
      onClick={onClick}
      disabled={loading || disabled}
      type={shouldRenderNextLink ? undefined : type}
      aria-disabled={loading || disabled}
      aria-busy={loading}
    >
      {loading && <Spinner style={sizeVariable} className={styles.spinner} />}

      {icon && !loading && (
        <Icon style={sizeVariable} className={styles.icon} name={icon} />
      )}
    </button>
  );

  if (shouldRenderNextLink) {
    return (
      <NextLink
        href={href as string}
        style={{ textDecoration: "none" }}
        tabIndex={disabled || loading ? -1 : 0}
      >
        {buttonElement}
      </NextLink>
    );
  }

  if (isExternalLink && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        tabIndex={disabled || loading ? -1 : 0}
        aria-label="(opens in new tab)"
      >
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};
