import type { PodProps } from "./types";
import { Wrapper } from "./styles";
import { Button, Heading, Icon, Text } from "@/components/atoms";

export const Pod = ({
  heading,
  description,
  cta,
  children,
  size = "md",
}: PodProps) => {
  const headingSize = size === "sm" ? "h5" : size === "md" ? "h4" : "h3";

  return (
    <Wrapper size={size}>
      <Heading size={headingSize}>{heading}</Heading>
      {description && <Text as="p">{description}</Text>}
      {children}
      {cta?.href && cta?.label && (
        <Button
          href={cta?.href}
          css={{ marginTop: "$6" }}
          size={size}
          rightIcon={<Icon name="ArrowRight" />}>
          {cta?.label}
        </Button>
      )}
    </Wrapper>
  );
};
