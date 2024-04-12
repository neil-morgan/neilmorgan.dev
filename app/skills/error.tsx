"use client";

import { InfoMessage } from "@/components/molecules";
import { Container } from "@/components/atoms";
import { INFO_MESSAGES } from "@/lib/site";

export default function Error({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container>
      <InfoMessage {...INFO_MESSAGES.errorOccurred} />
    </Container>
  );
}
