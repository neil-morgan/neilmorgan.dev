"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Container, Text } from "@/components/atoms";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
      <Text as="h2" size={9} color="$white">
        Oh&nbsp;no! An error occurred.
      </Text>
      <Text size={5}>Please try again later.</Text>
    </Container>
  );
}
