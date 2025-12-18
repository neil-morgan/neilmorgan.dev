export type PopoverProps = {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number | false>>;
  showArrow?: boolean;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  showClose?: boolean;
} & (
  | { anchor: React.ReactNode; trigger?: never }
  | { trigger: React.ReactNode; anchor?: never }
);
