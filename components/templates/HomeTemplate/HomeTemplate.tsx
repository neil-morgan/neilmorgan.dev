"use client";

import { Container, Text, Button } from "@/components/atoms";
import { FeaturedSection, ContentPresentation } from "@/components/molecules";

export const HomeTemplate = () => (
  <>
    <Container>
      <Text size={9} as="h2" weight={600} color="$white">
        Neil Morgan
      </Text>
      <Text as="p" css={{ marginBottom: "200px" }}>
        Non cupidatat pariatur veniam consectetur ullamco laborum qui esse.
        Laboris qui culpa proident culpa velit aliquip esse. Consequat
        incididunt aliqua ad cupidatat quis aliquip.
      </Text>

      <Text size={7} as="h3" weight={400} color="$white">
        3 Snapshot attributes here
      </Text>
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
