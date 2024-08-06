"use client";

import type { PageHeaderProps } from "./types";
import { Wrapper } from "./styles";
import { Text, Breadcrumbs } from "@/components/atoms";

export const PageHeader = ({
  kicker,
  title,
  heading,
  breadcrumbs,
}: PageHeaderProps) => (
  <Wrapper>
    {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
    {kicker && (
      <Text size={2} as="h2" print weight={600} color="$secondary1">
        {kicker}
      </Text>
    )}

    <Text size={8} as="h3" weight={500} color="$white">
      {title}
    </Text>

    {heading && (
      <Text size={3} as="p" weight={400}>
        {heading}
      </Text>
    )}
  </Wrapper>
);
