import NextLink from "next/link";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { TagWrapper, TagListWrapper } from "./styles";
import type { TagListProps, TagProps } from "./types";

export const Tag = ({ children, slug }: React.PropsWithChildren<TagProps>) => {
  return (
    <TagWrapper>
      <ConditionalWrapper
        if={Boolean(slug)}
        wrapWith={children => (
          <NextLink href={slug as string} passHref legacyBehavior>
            {children}
          </NextLink>
        )}>
        {children}
      </ConditionalWrapper>
    </TagWrapper>
  );
};

export const TagList = ({ list }: TagListProps) => (
  <TagListWrapper>
    {list.map(({ title, slug }, i) => (
      <Tag key={i} slug="">
        {title}
      </Tag>
    ))}
  </TagListWrapper>
);
