"use client";

import { useEffect } from "react";
import { kebabCase } from "lodash";
import type { HeadingProps } from "./types";
import { useIntersectionObserver } from "@/hooks";
import { Text } from "@/components/atoms";

export const Heading = ({
  as = "h2",
  children,
  css,
  id,
  size,
  isInViewport,
}: React.PropsWithChildren<HeadingProps>) => {
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
    <Text ref={ref} as={as} css={css} size={size} color="$white" id={id}>
      {children}
    </Text>
  );
};
