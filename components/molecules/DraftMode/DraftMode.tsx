"use client";

import { usePathname } from "next/navigation";
import { DraftModeToggle, DraftModeToggleButton } from "./styles";
import { Icon } from "@/components/atoms";

export const DraftMode = () => {
  const pathname = usePathname();
  const href = `/api/disable-draft?slug=${pathname}`;

  return (
    <DraftModeToggle>
      DRAFT MODE
      <DraftModeToggleButton href={href} prefetch={false}>
        <Icon name="Cross" />
      </DraftModeToggleButton>
    </DraftModeToggle>
  );
};
