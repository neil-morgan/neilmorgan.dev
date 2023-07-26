import type { ContentCardProps } from "./types";
import { Header } from "./styles";
import { Heading, Text, Button, Tag, Icon, Pod } from "@/components/atoms";

export const ContentCard = ({
  title,
  description,
  slug,
  category,
  css,
  context,
}: ContentCardProps) => (
  <Pod css={css}>
    <Header>
      <Heading size="h3">{title}</Heading>
      <Tag slug={context ? `/${context}/${category.slug}` : `${category.slug}`}>
        {category.title}
      </Tag>
    </Header>
    <Text as="p">{description}</Text>
    <Button
      href={slug}
      css={{ marginTop: "$4" }}
      rightIcon={<Icon name="arrowRight" />}>
      READ MORE
    </Button>
  </Pod>
);
