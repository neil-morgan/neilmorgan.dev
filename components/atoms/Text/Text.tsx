"use client";

import { forwardRef } from "react";
import { kebabCase } from "lodash";
import { Icon } from "../Icon";
import type { TextProps } from "./types";
import { Element, Anchor } from "./styles";
import type { DivElementRefType } from "@/types";

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
      textAlign = "left",
    }: React.PropsWithChildren<TextProps>,
    ref: DivElementRefType,
  ) => {
    const _id = kebabCase(id);

    return (
      <Element
        ref={ref}
        as={as}
        size={size}
        print={print}
        css={{
          ...css,
          fontWeight: weight,
          fontStyle: style,
          color,
          textAlign,
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
