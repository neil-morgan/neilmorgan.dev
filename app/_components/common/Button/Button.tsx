"use client";

import { useEffect, useRef, useMemo } from "react";

import NextLink from "next/link";

import { mergeRefs } from "react-merge-refs";

import { Icon, type IconNameType } from "@/app/_components/common/Icon";
import { Spinner } from "@/app/_components/common/Spinner";
import { useElementRefs } from "@/app/_providers";
import { type CssSizeConfigType } from "@/app/_styles";
import {
  combineClassNames,
  isInternalUrl,
  createCssSizeVariables,
} from "@/app/_utils";

import styles from "./Button.module.css";

import type { ButtonProps } from "./Button.types";

const sizes: CssSizeConfigType = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
};

const renderIcon = (
  direction: "left" | "right",
  icon: IconNameType | undefined,
  loading: boolean,
  loadingText: string | undefined,
  loadingPlacement: string,
  sizeVariable: object
) => {
  if (loading && loadingText && loadingPlacement === direction) {
    return (
      <Spinner
        style={sizeVariable}
        className={combineClassNames(styles.icon, styles[`icon-${direction}`])}
      />
    );
  }

  if (icon && !loading) {
    return (
      <Icon
        style={sizeVariable}
        className={combineClassNames(styles.icon, styles[`icon-${direction}`])}
        name={icon}
      />
    );
  }

  return null;
};

export const Button = ({
  className,
  disabled = false,
  formAction,
  href,
  iconLeft,
  iconRight,
  iconSpace = "near",
  label,
  loading = false,
  loadingPlacement = "center",
  loadingText,
  noHighlight = false,
  onClick,
  ref,
  size = "1rem",
  type = "button",
  width = "content",
}: ButtonProps) => {
  const { addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const sizeVariable = createCssSizeVariables(size, sizes);
  const hasOnlyLeftIcon = iconLeft && !loading && !iconRight;
  const hasOnlyRightIcon = !iconLeft && !loading && iconRight;
  const hasBothIcons = Boolean(iconLeft && iconRight);
  const hasIcon = Boolean(iconLeft || iconRight);
  const isIconSpaceNear = iconSpace === "near";
  const isExternalLink = !isInternalUrl(href ?? "");
  const innerStyle = {
    opacity: loading && !loadingText ? 0 : 1,
  };
  const shouldHighlight = useMemo(() => !noHighlight, [noHighlight]);
  const shouldRenderNextLink = Boolean(href) && !isExternalLink;

  const renderIconDirection = (
    direction: "left" | "right",
    icon: IconNameType | undefined
  ) =>
    renderIcon(
      direction,
      icon,
      loading,
      loadingText,
      loadingPlacement,
      sizeVariable
    );

  useEffect(() => {
    if (disabled || loading || noHighlight) return;
    addElementRef(elementRef.current);
  }, [addElementRef, disabled, loading, noHighlight]);

  const sharedClassName = combineClassNames(
    styles.button,
    styles[`width-${width}`],
    hasIcon && styles["with-icon"],
    hasBothIcons && styles["both-icons"],
    hasOnlyLeftIcon && styles["single-icon-left"],
    hasOnlyRightIcon && styles["single-icon-right"],
    isIconSpaceNear && styles["icon-near"],
    className,
    shouldHighlight && "highlight",
    "highlightable"
  );

  const content = (
    <>
      {loading && !loadingText && (
        <Spinner
          style={sizeVariable}
          className={combineClassNames(styles.icon, styles.spinner)}
        />
      )}
      <div className={styles["button-inner"]} style={innerStyle}>
        {renderIconDirection("left", iconLeft)}
        <span className={styles.label}>{loadingText || label}</span>
        {renderIconDirection("right", iconRight)}
      </div>
    </>
  );

  if (shouldRenderNextLink) {
    return (
      <NextLink
        ref={mergeRefs([
          elementRef as React.RefObject<HTMLAnchorElement>,
          ref as React.Ref<HTMLAnchorElement>,
        ])}
        style={{ ...sizeVariable }}
        className={sharedClassName}
        onClick={onClick}
        href={href as string}
        tabIndex={disabled || loading ? -1 : 0}
        aria-label={loading && loadingText ? `${loadingText}` : label}
        aria-disabled={loading || disabled}
        aria-busy={loading}
      >
        {content}
      </NextLink>
    );
  }

  if (isExternalLink && href) {
    return (
      <a
        ref={mergeRefs([
          elementRef as React.RefObject<HTMLAnchorElement>,
          ref as React.Ref<HTMLAnchorElement>,
        ])}
        style={{ ...sizeVariable }}
        className={sharedClassName}
        onClick={onClick}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={disabled || loading ? -1 : 0}
        aria-label={`${label} (opens in new tab)`}
        aria-disabled={loading || disabled}
        aria-busy={loading}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={mergeRefs([
        elementRef as React.RefObject<HTMLButtonElement>,
        ref as React.Ref<HTMLButtonElement>,
      ])}
      style={{ ...sizeVariable }}
      className={sharedClassName}
      onClick={onClick}
      disabled={loading || disabled}
      type={type}
      formAction={formAction}
      aria-label={loading && loadingText ? `${loadingText}` : label}
      aria-disabled={loading || disabled}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};
