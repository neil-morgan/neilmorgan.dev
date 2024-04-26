"use client";

import { forwardRef } from "react";
import { kebabCase } from "lodash";
import { Icon } from "../Icon";
import type { TextProps } from "./types";
import { Element, Anchor } from "./styles";
import type { DivElementRefType } from "@/service";

export const Text = forwardRef(
  (
    {
      as = "div",
      children,
      css,
      id,
      size = "inherit",
      weight = 400,
      style,
      print = false,
      color,
      textAlign = "inherit",
    }: React.PropsWithChildren<TextProps>,
    ref: DivElementRefType,
  ) => {
    const _id = kebabCase(id);
    const sizeIsNumber = typeof size === "number";
    const lineHeight = sizeIsNumber && size >= 8 ? 1.2 : as === "p" ? 1.5 : 1.3;

    return (
      <Element
        ref={ref}
        as={as}
        size={size}
        print={print}
        css={{
          ...css,
          fontWeight: as === "strong" ? 800 : weight,
          fontStyle: style,
          color,
          textAlign,
          lineHeight,
        }}>
        {id && (
          <Anchor
            href={`#${_id}`}
            id={_id}
            {...(sizeIsNumber && { scrollMargin: size })}>
            <Icon name="Link" />
          </Anchor>
        )}
        {children}
      </Element>
    );
  },
);

Text.displayName = "Text";
