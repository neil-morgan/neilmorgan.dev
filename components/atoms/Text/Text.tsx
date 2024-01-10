"use client";

import { kebabCase } from "lodash";
import { Icon } from "../Icon";
import type { TextProps } from "./types";
import { Element, Anchor } from "./styles";

export const Text = ({
  as = "div",
  children,
  css,
  id,
  size,
  weight = 400,
  style,
  print = false,
  color,
}: React.PropsWithChildren<TextProps>) => {
  const _id = kebabCase(id);
  return (
    <Element
      as={as}
      size={size}
      print={print}
      css={{
        ...css,
        fontWeight: weight,
        fontStyle: style,
        color,
      }}>
      {id && (
        <Anchor href={`#${_id}`} id={_id} scrollMargin={size}>
          <Icon name="Link" />
        </Anchor>
      )}
      {children}
    </Element>
  );
};
