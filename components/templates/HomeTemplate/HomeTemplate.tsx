"use client";

import { Container, Text } from "@/components/atoms";
import { FeaturedSection } from "@/components/molecules";

export const HomeTemplate = () => (
  <>
    <Container>
      <Text size={9} as="h2" weight={600} color="$white">
        Neil Morgan
      </Text>
      <Text as="p" css={{ marginBottom: "300px" }}>
        Non cupidatat pariatur veniam consectetur ullamco laborum qui esse.
        Laboris qui culpa proident culpa velit aliquip esse. Consequat
        incididunt aliqua ad cupidatat quis aliquip.
      </Text>
    </Container>

    <FeaturedSection>
      <Container>
        <Text size={7} as="h2" weight={600} color="$white">
          Latest post
        </Text>
      </Container>
    </FeaturedSection>
  </>
);
