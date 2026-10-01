"use client";

import { useRef, useEffect } from "react";

import NextLink from "next/link";

import { mergeRefs } from "react-merge-refs";

import { useElementRefs } from "@/app/_providers";
import { combineClassNames, isInternalUrl } from "@/app/_utils";

import { Interaction } from "@/app/_components";

import styles from "./Card.module.css";

import type { CardProps } from "./Card.types";

export const Card = ({
  children,
  className,
  href,
  noHighlight,
  ref,
}: CardProps) => {
  const { addElementRef } = useElementRefs();
  const elementRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);
  const shouldHighlight = Boolean(href && !noHighlight);

  const classNames = combineClassNames(
    styles.card,
    className,
    shouldHighlight && "highlight",
    href && "highlightable",
  );

  useEffect(() => {
    if (!shouldHighlight) return;
    addElementRef(elementRef.current);
  }, [addElementRef, shouldHighlight]);

  const isInternalLink = href && isInternalUrl(href);
  const isExternalLink = href && !isInternalUrl(href);

  return (
    <Interaction disabled={!href}>
      {isInternalLink ? (
        <NextLink
          href={href}
          className={classNames}
          ref={mergeRefs([
            elementRef as React.RefObject<HTMLAnchorElement>,
            ref as React.Ref<HTMLAnchorElement>,
          ])}
        >
          {children}
        </NextLink>
      ) : isExternalLink ? (
        <a
          href={href}
          className={classNames}
          ref={mergeRefs([
            elementRef as React.RefObject<HTMLAnchorElement>,
            ref as React.Ref<HTMLAnchorElement>,
          ])}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <div
          className={classNames}
          ref={mergeRefs([
            elementRef as React.RefObject<HTMLDivElement>,
            ref as React.Ref<HTMLDivElement>,
          ])}
        >
          {children}
        </div>
      )}
    </Interaction>
  );
};
