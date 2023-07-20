"use client";

import { kebabCase } from "lodash";
import type { HeadingProps } from "./types";
import { HeadingElement, HeadingAnchor } from "./styles";
import { Icon } from "../Icon";

export const Heading = ({
  children,
  id,
  as = "h2",
  size,
  anchorSize = "md",
  css,
}: HeadingProps) => {
  const _id = kebabCase(id);

  return (
    <HeadingElement as={as} size={size ?? as} css={css}>
      {id && (
        <HeadingAnchor href={`#${_id}`} id={_id}>
          <Icon name="link" size={anchorSize} />
        </HeadingAnchor>
      )}

      {children}
    </HeadingElement>
  );
};
