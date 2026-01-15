"use client";

import NextLink from "next/link";

import {
  Interaction,
  Spinner,
  Icon,
  type IconNameType,
} from "@/app/_components";
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
  onClick,
  ref,
  size = "1rem",
  type = "button",
  width = "content",
}: ButtonProps) => {
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
  const shouldRenderNextLink = Boolean(href) && !isExternalLink;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (href?.includes("#")) {
      const hashIndex = href.indexOf("#");
      const hash = href.substring(hashIndex + 1);
      const currentPath = href.substring(0, hashIndex);
      const isCurrentPage =
        !currentPath || currentPath === window.location.pathname;

      if (hash && isCurrentPage) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
    onClick?.(e);
  };

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

  const sharedClassName = combineClassNames(
    styles.button,
    styles[`width-${width}`],
    hasIcon && styles["with-icon"],
    hasBothIcons && styles["both-icons"],
    hasOnlyLeftIcon && styles["single-icon-left"],
    hasOnlyRightIcon && styles["single-icon-right"],
    isIconSpaceNear && styles["icon-near"],
    className
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

  return (
    <Interaction>
      {shouldRenderNextLink ? (
        <NextLink
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={{ ...sizeVariable }}
          className={sharedClassName}
          onClick={handleClick}
          href={href as string}
          tabIndex={disabled || loading ? -1 : 0}
          aria-label={loading && loadingText ? `${loadingText}` : label}
          aria-disabled={loading || disabled}
          aria-busy={loading}
        >
          {content}
        </NextLink>
      ) : isExternalLink && href ? (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={{ ...sizeVariable }}
          className={sharedClassName}
          onClick={handleClick}
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
      ) : (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
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
      )}
    </Interaction>
  );
};
