import type { SpacingOptionsType } from "@/service";

export type PopoverProps = {
  children: React.ReactNode;
  open?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  withArrow?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number | false>>;
  columns?: number;
  padding?: SpacingOptionsType;
  gap?: SpacingOptionsType;
} & (
  | { anchor: React.ReactNode; trigger?: never }
  | { trigger: React.ReactNode; anchor?: never }
);
