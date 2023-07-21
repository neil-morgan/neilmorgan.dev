"use client";

import { kebabCase } from "lodash";
import type { HeadingProps } from "./types";
import { HeadingElement, HeadingAnchor } from "./styles";
import { Icon } from "../Icon";

export const Heading = ({
  children,
  id,
  as,
  css,
  size = "primary",
}: HeadingProps) => {
  const _id = kebabCase(id);
  const headingElement =
    size === "primary" ? "h2" : size === "secondary" ? "h3" : "h4";

  return (
    <HeadingElement as={as || headingElement} size={size} css={css}>
      {id && (
        <HeadingAnchor href={`#${_id}`} id={_id}>
          <Icon name="link" />
        </HeadingAnchor>
      )}

      {children}
    </HeadingElement>
  );
};
