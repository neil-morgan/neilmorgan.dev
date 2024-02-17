import { Wrapper, TagListWrapper } from "./styles";

export const Tag = ({ children }: React.PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

type TagListProps = {
  list: string[];
};

export const TagList = ({ list }: TagListProps) => {
  return (
    <TagListWrapper>
      <Tag></Tag>
    </TagListWrapper>
  );
};
