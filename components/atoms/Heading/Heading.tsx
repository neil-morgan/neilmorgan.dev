"use client";

import { kebabCase } from "lodash";
import { Icon } from "../Icon";
import type { HeadingProps } from "./types";
import { HeadingElement, HeadingAnchor } from "./styles";

export const Heading = ({
  as = "h2",
  children,
  css,
  id,
  size = "h2",
  color,
  style,
}: HeadingProps) => {
  const _id = kebabCase(id);
  return (
    <HeadingElement
      as={as}
      size={size ?? as}
      style={style}
      css={css}
      color={color}>
      {id && (
        <HeadingAnchor href={`#${_id}`} id={_id}>
          <Icon name="link" />
        </HeadingAnchor>
      )}

      {children}
    </HeadingElement>
  );
};
