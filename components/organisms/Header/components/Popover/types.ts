export type PopoverProps = {
  children: React.ReactNode;
  anchor: React.ReactNode;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number | null>>;
};
