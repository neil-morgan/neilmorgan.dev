import NextLink from "next/link";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { TagWrapper, TagListWrapper } from "./styles";
import type { TagListProps, TagProps } from "./types";

export const Tag = ({
  children,
  slug,
  color,
}: React.PropsWithChildren<TagProps>) => (
  <TagWrapper color={color}>
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

export const TagList = ({ list, color = "secondary" }: TagListProps) => (
  <TagListWrapper>
    {list.map(({ title, slug }, i) => (
      <Tag key={i} slug="" color={color}>
        {title}
      </Tag>
    ))}
  </TagListWrapper>
);
