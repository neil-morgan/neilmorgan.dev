"use client";

import NextLink from "next/link";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { TagWrapper, TagListWrapper } from "./styles";
import type { TagListProps, TagProps } from "./types";

export const Tag = ({ children, slug }: React.PropsWithChildren<TagProps>) => {
  const isLink = Boolean(slug);
  return (
    <ConditionalWrapper
      if={isLink}
      wrapWith={children => (
        <NextLink href={slug as string} passHref legacyBehavior>
          {children}
        </NextLink>
      )}>
      <TagWrapper
        as={isLink ? "a" : "div"}
        color={isLink ? "primary" : "secondary"}>
        {children}
      </TagWrapper>
    </ConditionalWrapper>
  );
};

export const TagList = ({ list }: TagListProps) => (
  <TagListWrapper>
    {list.map(({ title, slug }, i) => (
      <Tag key={i} slug={slug}>
        {title}
      </Tag>
    ))}
  </TagListWrapper>
);
