import type { ContentCardProps } from "./types";
import { Wrapper, Header } from "./styles";
import { Heading, Text, Button, Tag, Icon } from "@/components/atoms";

export const ContentCard = ({
  title,
  description,
  slug,
  category,
  css,
}: ContentCardProps) => {
  return (
    <Wrapper css={css}>
      <Header>
        <Heading size="h3">{title}</Heading>
        <Tag>{category.title}</Tag>
      </Header>
      <Text as="p">{description}</Text>
      <Button
        href={slug}
        css={{ marginTop: "$4" }}
        rightIcon={<Icon name="arrowRight" />}>
        READ MORE
      </Button>
    </Wrapper>
  );
};
