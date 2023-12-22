export type PopoverProps = {
  children: React.ReactNode;
  open?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  withArrow?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number | false>>;
} & (
  | { anchor: React.ReactNode; trigger?: never }
  | { trigger: React.ReactNode; anchor?: never }
);
