"use client";

import type { PageHeaderProps } from "./types";
import { Wrapper, TitleWrapper, Body } from "./styles";
import {
  Text,
  Breadcrumbs,
  AspectImage,
  ConditionalWrapper,
} from "@/components/atoms";

export const PageHeader = ({
  kicker,
  title,
  subTitle,
  breadcrumbs,
  image,
}: PageHeaderProps) => (
  <Wrapper>
    {image?.url && (
      <AspectImage
        ratio={1}
        fit="cover"
        url={image.url}
        width={200}
        description={image.description}
        blurDataUrl={image.blurDataUrl}
        css={{
          display: "none",
          "@md": {
            display: "block",
          },
        }}
      />
    )}
    <Body>
      {kicker && (
        <Text size={1} as="h2" print weight={600} color="$secondary1">
          {kicker}
        </Text>
      )}

      <ConditionalWrapper
        if={Boolean(image?.url)}
        wrapWith={children => <TitleWrapper>{children}</TitleWrapper>}>
        {image?.url && (
          <AspectImage
            ratio={1}
            fit="cover"
            url={image.url}
            width={55}
            description={image.description}
            blurDataUrl={image.blurDataUrl}
            css={{
              display: "block",
              "@md": {
                display: "none",
              },
            }}
          />
        )}
        <Text size={8} as="h3" weight={500} color="$white">
          {title}
        </Text>
      </ConditionalWrapper>

      {subTitle && (
        <Text size={3} as="h3" weight={400}>
          {subTitle}
        </Text>
      )}
      {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
    </Body>
  </Wrapper>
);
