"use client";

import { IntroWrapper, IntroDetails } from "./styles";
import { DnaHologramAnimation } from "@/components/animations";
import { Container, Text, Button } from "@/components/atoms";
import { FeaturedSection, ContentPresentation } from "@/components/molecules";
import { colors } from "@/lib/stitches";

export const HomeTemplate = () => (
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
            Design and development is in my DNA . I love to create, build and
            collaborate. Explore and discover what I can do for you.
          </Text>
          <Button css={{ marginTop: "$8" }}>Primary CTA</Button>
        </IntroDetails>
        <DnaHologramAnimation />
      </IntroWrapper>
    </Container>

    <FeaturedSection>
      <ContentPresentation
        image={{
          src: "https://picsum.photos/seed/321/1920/1080",
          alt: "Hello world",
        }}
        title="Aliquip ut deserunt exercitation."
        label="Latest post"
        cta={{ href: "/", label: "Read more" }}
        body="Esse cupidatat nisi dolore deserunt. Excepteur esse aliqua sunt excepteur qui reprehenderit."
      />
    </FeaturedSection>

    <Container>
      <Text size={7} as="h2" weight={600} color="$white">
        Break out some featured feedback here
      </Text>
      <Text as="p" css={{ marginBottom: "200px" }}>
        Non cupidatat pariatur veniam consectetur ullamco laborum qui esse.
        Laboris qui culpa.
      </Text>
    </Container>

    <FeaturedSection>
      <ContentPresentation
        reverse
        image={{
          src: "https://picsum.photos/seed/123/1920/1080",
          alt: "Hello world",
        }}
        title="Aliquip ut deserunt exercitation."
        label="Latest project"
        cta={{ href: "/", label: "Read more" }}
        body="Esse cupidatat nisi dolore deserunt. Excepteur esse aliqua sunt excepteur qui reprehenderit."
      />
    </FeaturedSection>
  </>
);
