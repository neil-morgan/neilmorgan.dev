"use client";

import { usePathname } from "next/navigation";
import {
  DraftModeWrapper,
  DraftModeToggle,
  DraftModeToggleButton,
} from "./styles";
import { Icon } from "@/components/atoms";
import type { DraftModeProps } from "./types";

export const DraftMode = ({ children }: DraftModeProps) => {
  const pathname = usePathname();
  const href = `/api/disable-draft?slug=${pathname}`;

  return (
    <DraftModeWrapper>
      <DraftModeToggle>
        DRAFT MODE
        <DraftModeToggleButton href={href} prefetch={false}>
          <Icon name="cross" />
        </DraftModeToggleButton>
      </DraftModeToggle>

      {children}
    </DraftModeWrapper>
  );
};
