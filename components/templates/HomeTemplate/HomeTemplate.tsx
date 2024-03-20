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
}: HomeTemplateProps) => (
  <>
    <Container>
      <IntroWrapper>
        <IntroDetails>
          <Text size={8} as="h2" weight={600} color="$white">
            {header.heading}
          </Text>
          <Text size={6} as="h3" weight={500} color="$primary1">
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
            <Text
              size={5}
              weight={600}
              color="$primary1"
              css={{ margin: "$2 0 $4" }}>
              {item.heading}
            </Text>
            <Text textAlign="center">{item.body}</Text>
          </SellingPoint>
        ))}
      </SellingPointsWrapper>
    </Container>

    {latestPost && (
      <FeaturedSection>
        <Container>
          <ContentPresentation
            image={latestPost?.image}
            title={latestPost?.title}
            label="Latest post"
            tags={latestPost?.tagsCollection}
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
