import type { PageHeaderProps } from "./types";
import { Wrapper } from "./styles";
import { Text, Breadcrumbs } from "@/components/atoms";

export const PageHeader = ({
  kicker,
  title,
  subTitle,
  breadcrumbs,
}: PageHeaderProps) => (
  <Wrapper>
    {kicker && (
      <Text size={1} as="h2" print weight={600} color="$secondary1">
        {kicker}
      </Text>
    )}

    <Text size={8} as="h3" weight={500} color="$white">
      {title}
    </Text>

    {subTitle && (
      <Text size={3} as="h3" weight={400}>
        {subTitle}
      </Text>
    )}
    {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
  </Wrapper>
);
