"use client";

import {
  DraftModeWrapper,
  DraftModeToggle,
  DraftModeToggleButton,
} from "./styles";
import { Icon } from "@/components/atoms";
import type { DraftModeProps } from "./types";

export const DraftMode = ({ isEnabled, children }: DraftModeProps) => {
  if (!isEnabled) {
    return <>{children}</>;
  }
  return (
    <DraftModeWrapper>
      <DraftModeToggle>
        DRAFT MODE
        <DraftModeToggleButton href="/api/disable-draft" prefetch={false}>
          <Icon name="cross" />
        </DraftModeToggleButton>
      </DraftModeToggle>

      {children}
    </DraftModeWrapper>
  );
};
