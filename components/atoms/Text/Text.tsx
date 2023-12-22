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
  color,
  weight = 400,
  style,
  appearance,
}: React.PropsWithChildren<TextProps>) => {
  const _id = kebabCase(id);
  const mergedCss = {
    ...css,
    fontWeight: weight,
    fontStyle: style,
  };

  return (
    <Element
      as={as}
      size={size}
      appearance={appearance}
      css={mergedCss}
      color={color}>
      {id && (
        <Anchor href={`#${_id}`} id={_id} scrollMargin={size}>
          <Icon name="Link" />
        </Anchor>
      )}
      {children}
    </Element>
  );
};
