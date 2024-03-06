"use client";

import {
  IntroWrapper,
  IntroDetails,
  SellingPointsWrapper,
  SellingPoint,
} from "./styles";
import type { HomeTemplateProps } from "./types";
import { DnaHologramAnimation } from "@/components/organisms/DnaHologramAnimation";
import { Container, Text, Button, Icon } from "@/components/atoms";
import { FeaturedSection, ContentPresentation } from "@/components/molecules";

const sellingPoints = [
  {
    icon: "Code",
    heading: "Engineering",
    text: "Building solutions is the core of what I do. I love a problem and thrive when faced with a challenge.",
  },
  {
    icon: "PaintDrop",
    heading: "UI & UX",
    text: "I was born curious and creative. I have always enjoyed creating for the enjoyment of others.",
  },
  {
    icon: "Share",
    heading: "Collaboration",
    text: "A natural leader. Victory to me means mentoring others, sharing knowledge and delivering as a team.",
  },
];

export const HomeTemplate = ({ latestPost }: HomeTemplateProps) => (
  <>
    <Container>
      <IntroWrapper>
        <IntroDetails>
          <Text size={8} as="h2" weight={600} color="$white">
            Hey, I&apos;m Neil.
          </Text>
          <Text size={6} as="h3" weight={500} color="$primary1">
            A Senior Software Engineer.
          </Text>
          <Text as="p">
            Design and development is in my DNA. I love to create, build and
            collaborate. Explore my site and discover how can I help you.
          </Text>
          {/* <Button css={{ marginTop: "$6" }}>About</Button> */}
        </IntroDetails>
        <DnaHologramAnimation />
      </IntroWrapper>
    </Container>

    <Container>
      <SellingPointsWrapper>
        {sellingPoints.map((item, i) => (
          <SellingPoint key={i}>
            <Icon name={item.icon} css={{ fontSize: "3rem" }} />
            <Text size={5} weight={600} color="$primary1" css={{ margin: "$2 0 $4" }}>
              {item.heading}
            </Text>
            <Text textAlign="center">{item.text}</Text>
          </SellingPoint>
        ))}
      </SellingPointsWrapper>
    </Container>

    {latestPost.title && latestPost.slug && latestPost.description && (
      <FeaturedSection>
        <Container>
          <ContentPresentation
            image={{
              src: "https://picsum.photos/seed/321/1920/1080",
              alt: "Hello world",
            }}
            title={latestPost.title}
            label="Latest post"
            cta={{ href: latestPost.slug, label: "Read more" }}
            body={latestPost.description}
          />
        </Container>
      </FeaturedSection>
    )}

    <Container>
      <Text as="p" textAlign="center">
        coming soon...
      </Text>
    </Container>
  </>
);
