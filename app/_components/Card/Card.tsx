"use client";

import { useMemo, useRef, useEffect } from "react";

import NextLink from "next/link";

import { mergeRefs } from "react-merge-refs";

import { useElementRefs } from "@/app/_providers";
import { combineClassNames, isInternalUrl } from "@/app/_utils";

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
  const shouldHighlight = useMemo(() => !noHighlight, [noHighlight]);

  const classNames = combineClassNames(
    styles.card,
    className,
    shouldHighlight && "highlight",
    "highlightable"
  );

  useEffect(() => {
    if (noHighlight) return;
    addElementRef(elementRef.current);
  }, [addElementRef, noHighlight]);

  if (href) {
    if (isInternalUrl(href)) {
      return (
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
      );
    }
    return (
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
    );
  }

  return (
    <div
      className={classNames}
      ref={mergeRefs([
        elementRef as React.RefObject<HTMLDivElement>,
        ref as React.Ref<HTMLDivElement>,
      ])}
    >
      {children}
    </div>
  );
};
