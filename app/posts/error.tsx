"use client";

import { InfoMessage } from "@/components/molecules";
import { INFO_MESSAGES } from "@/lib/site";

const { pageNotFound, errorOccurred } = INFO_MESSAGES;

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message =
    error.message === "NEXT_NOT_FOUND" ? pageNotFound : errorOccurred;

  return <InfoMessage {...message} />;
}
