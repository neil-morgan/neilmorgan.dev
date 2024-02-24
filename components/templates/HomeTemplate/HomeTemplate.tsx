"use client";

import { IntroWrapper, IntroDetails } from "./styles";
import { DnaHologramAnimation } from "@/components/animations";
import { Container, Text, Button } from "@/components/atoms";
import { FeaturedSection, ContentPresentation } from "@/components/molecules";

export const HomeTemplate = () => (
  <>
    <Container>
      <IntroWrapper>
        <IntroDetails>
          <Text size={9} as="h2" weight={600} color="$white">
            A cool heading goes here
          </Text>
          <Text as="p">
            Some nifty intro body text which talks about the DNA of what makes
            me, me. That sort of thing. Animation to the right showing a
            hologram of DNA being measured and explored.
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
