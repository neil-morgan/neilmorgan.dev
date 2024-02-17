import type { ContentPresentationProps } from "./types";
import { ContentDetails, ContentWrapper, ContentHeader } from "./styles";
import { Container, Text, Button, AspectImage, Tag } from "@/components/atoms";

export const ContentPresentation = ({
  title,
  label,
  body,
  cta,
  image,
  reverse,
}: ContentPresentationProps) => (
  <Container>
    <ContentWrapper>
      <AspectImage src={image.src} alt={image.alt} />
      <ContentDetails reverse={reverse}>
        <ContentHeader>
          <Text print size={1} weight={600}>
            {label}
          </Text>
          <Tag>React</Tag>
        </ContentHeader>

        <Text size={5} as="h3" weight={400} color="$white">
          {title}
        </Text>
        <Text>{body}</Text>
        <Button href={cta.href}>{cta.label}</Button>
      </ContentDetails>
    </ContentWrapper>
  </Container>
);
