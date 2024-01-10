import type { Spacing } from "@/lib/stitches";

export type PopoverProps = {
  children: React.ReactNode;
  open?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  withArrow?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number | false>>;
  columns?: number;
  padding?: Spacing;
  gap?: Spacing;
} & (
  | { anchor: React.ReactNode; trigger?: never }
  | { trigger: React.ReactNode; anchor?: never }
);
