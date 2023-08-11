"use client";

import { Category, Header, Grid } from "./styles";
import { Button, Heading, Icon, Pod, Text } from "@/components/atoms";
import type { GroupedPostType } from "@/types";

export const PostGrid = ({ category, items }: GroupedPostType) => (
  <Category>
    <Header>
      <Heading size="h6" as="h2" style="print">
        {category.title}
      </Heading>
      <Text>
        {items.length} Article{items.length !== 1 && "s"}
      </Text>
    </Header>

    <Grid>
      {items.map(({ title, description, slug }, i) => (
        <Pod key={i}>
          <Heading size="h4">{title}</Heading>
          <Text as="p">{description}</Text>
          <Button
            href={`/posts/${category.slug}/${slug}`}
            css={{ marginTop: "$6" }}
            size="md"
            rightIcon={<Icon name="arrowRight" />}>
            READ
          </Button>
        </Pod>
      ))}
    </Grid>
  </Category>
);
