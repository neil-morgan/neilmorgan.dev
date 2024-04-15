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
      size,
      weight = 400,
      style,
      print = false,
      color,
      textAlign = "inherit",
    }: React.PropsWithChildren<TextProps>,
    ref: DivElementRefType,
  ) => {
    const _id = kebabCase(id);
    const lineHeight = size && size >= 8 && size <= 10 ? 1.2 : 1.5;

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
          <Anchor href={`#${_id}`} id={_id} scrollMargin={size}>
            <Icon name="Link" />
          </Anchor>
        )}
        {children}
      </Element>
    );
  },
);

Text.displayName = "Text";
