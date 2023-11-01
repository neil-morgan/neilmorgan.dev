"use client";

import { Container, Text } from "@/components/atoms";

export const HomePageTemplate = () => (
  <Container>
    {Array.from({ length: 11 }).map((_, i) => (
      <Text key={i} size={i}>
        Lorem Ipsum dolar
      </Text>
    ))}

    {Array.from({ length: 9 }).map((_, i) => (
      <Text key={i} weight={`${i + 1}00`}>
        Lorem Ipsum dolar
      </Text>
    ))}
  </Container>
);
