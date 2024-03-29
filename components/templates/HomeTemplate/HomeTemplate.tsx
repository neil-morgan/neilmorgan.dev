"use client";

import {
  IntroWrapper,
  IntroDetails,
  SellingPointsWrapper,
  SellingPoint,
} from "./styles";
import type { HomeTemplateProps } from "./types";
import { DnaHologramAnimation } from "@/components/organisms/DnaHologramAnimation";
import { Container, Text, Icon } from "@/components/atoms";
import { FeaturedSection, ContentPresentation } from "@/components/molecules";

export const HomeTemplate = ({
  latestPost,
  header,
  sellingPoints,
  base64Map,
}: HomeTemplateProps) => (
  <>
    <Container>
      <IntroWrapper>
        <IntroDetails>
          <Text size={8} as="h2" weight={600} color="$white">
            {header.heading}
          </Text>
          <Text size={5} as="h3" color="$primary1">
            {header.subheading}
          </Text>
          <Text as="p">{header.body}</Text>
        </IntroDetails>
        <DnaHologramAnimation />
      </IntroWrapper>
    </Container>

    <Container>
      <SellingPointsWrapper>
        {sellingPoints.map((item, i) => (
          <SellingPoint key={i}>
            {item.icon && <Icon name={item.icon} css={{ fontSize: "3rem" }} />}
            <Text size={5} color="$primary1" css={{ margin: "$2 0 $4" }}>
              {item.heading}
            </Text>
            <Text textAlign="center">{item.body}</Text>
          </SellingPoint>
        ))}
      </SellingPointsWrapper>
    </Container>

    {latestPost &&
      latestPost.image?.title &&
      latestPost.image.description &&
      latestPost.image.url && (
        <FeaturedSection>
          <Container>
            <ContentPresentation
              image={{
                url: latestPost.image.url,
                description: latestPost.image.description,
                blurDataUrl: base64Map[latestPost.image.title],
              }}
              title={latestPost.title}
              label="Latest post"
              tags={latestPost.tagsCollection}
              cta={{
                href: `/posts/${latestPost.category?.slug}/${latestPost.slug}`,
                label: "Read more",
              }}
              body={latestPost.description}
            />
          </Container>
        </FeaturedSection>
      )}
  </>
);
