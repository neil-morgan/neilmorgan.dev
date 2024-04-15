import type { PageHeaderProps } from "./types";
import { Wrapper } from "./styles";
import { Text } from "@/components/atoms";

export const PageHeader = ({ kicker, title, subTitle }: PageHeaderProps) => (
  <Wrapper>
    {kicker && (
      <Text size={1} as="h2" print weight={600} color="$primary1">
        {kicker}
      </Text>
    )}

    <Text size={8} as="h3" weight={500} color="$white">
      {title}
    </Text>

    {subTitle && (
      <Text size={3} as="h3" weight={400} >
        {subTitle}
      </Text>
    )}
  </Wrapper>
);
