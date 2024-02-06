"use client";

import { usePathname } from "next/navigation";
import { DraftModeButton } from "./styles";

export const ToggleDraftMode = ({ isEnabled }: { isEnabled: boolean }) => {
  const pathname = usePathname();
  return (
    <DraftModeButton
      href={
        isEnabled
          ? `/api/disable-draft?redirect=${pathname}`
          : `/api/draft?redirect=${pathname}&secret=${process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET}`
      }
      isEnabled={isEnabled}>
      {isEnabled ? "Exit Draft Mode" : "Draft Mode"}
    </DraftModeButton>
  );
};
