"use client";

import { useEffect } from "react";
import { kebabCase } from "lodash";
import { Icon } from "../Icon";
import type { TextProps } from "./types";
import { Element, Anchor } from "./styles";
import { useIntersectionObserver } from "@/hooks";

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
  textAlign = "left",
  isInViewport,
}: React.PropsWithChildren<TextProps>) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px 0px -66% 0px",
  });
  const _id = kebabCase(id);

  useEffect(() => {
    if (entry?.isIntersecting && isInViewport && id) {
      isInViewport(_id);
    }
  }, [entry?.isIntersecting, _id, isInViewport, id]);

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
};
