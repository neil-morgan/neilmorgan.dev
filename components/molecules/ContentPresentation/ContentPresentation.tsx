import type { ContentPresentationProps } from "./types";
import { ContentDetails, ContentWrapper, ContentHeader } from "./styles";
import { Text, Button, AspectImage, Tag, TagList } from "@/components/atoms";
import type { TagType } from "@/types";

export const ContentPresentation = ({
  title,
  label,
  body,
  cta,
  image,
  reverse,
  tags,
}: ContentPresentationProps) => (
  <ContentWrapper>
    {image?.url && image?.description && (
      <AspectImage src={image.url} alt={image.description} />
    )}
    <ContentDetails reverse={reverse}>
      <ContentHeader>
        <Text print size={1} weight={600}>
          {label}
        </Text>
        {tags?.items && <TagList list={tags?.items as TagType[]} />}
      </ContentHeader>

      <Text size={5} as="h3" weight={400} color="$white">
        {title}
      </Text>
      <Text>{body}</Text>
      <Button href={cta.href}>{cta.label}</Button>
    </ContentDetails>
  </ContentWrapper>
);
