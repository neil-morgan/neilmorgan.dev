import type { PodProps } from "./types";
import { Wrapper } from "./styles";
import { Button, Heading, Icon, Text } from "@/components/atoms";

export const Pod = ({ heading, description, cta, children }: PodProps) => (
  <Wrapper>
    <Heading size="h4">{heading}</Heading>
    {description && <Text as="p">{description}</Text>}
    {children}
    {cta?.href && cta?.label && (
      <Button
        href={cta?.href}
        css={{ marginTop: "$6" }}
        size="md"
        rightIcon={<Icon name="ArrowRight" />}>
        {cta?.label}
      </Button>
    )}
  </Wrapper>
);
