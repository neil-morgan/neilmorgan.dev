"use client";

import { InfoMessage } from "@/components/molecules";
import { INFO_MESSAGES } from "@/lib/site";

export default function Error({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <InfoMessage {...INFO_MESSAGES.errorOccurred} />;
}
