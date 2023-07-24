"use client";

import { Button, Grid, Heading, Icon, Pod, Text } from "@/components/atoms";
import type { GroupedPostType } from "@/types";
import { Category, Header } from "./styles";

export const PostGrid = ({ category, items }: GroupedPostType) => (
  <Category>
    <Header>
      <Heading size="h6" as="h2" style="print">
        {category}
      </Heading>
      <Text>
        {items.length} Article{items.length !== 1 && "s"}
      </Text>
    </Header>

    <Grid columns={2} gap={6} css={{ marginTop: "$5" }}>
      {items.map(({ title, description, slug }, i) => (
        <Pod key={i}>
          <Heading size="h4">{title}</Heading>
          <Text as="p">{description}</Text>
          <Button
            href={`/posts/${slug}`}
            css={{ marginTop: "$6" }}
            size="md"
            rightIcon={<Icon name="arrowRight" />}>
            READ MORE
          </Button>
        </Pod>
      ))}
    </Grid>
  </Category>
);
