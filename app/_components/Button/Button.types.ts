import type { IconNameType } from "@/app/_components/Icon";
import type { CssSizeType } from "@/app/_styles";

export type ButtonVariant = "solid" | "bordered" | "ghost";
export type ButtonColorScheme = "electric-blue" | "orange" | "liquorice";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonWidth = "content" | "normal" | "full";
export type ButtonIconSpace = "near" | "far";

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  formAction?: string | ((formData: FormData) => void | Promise<void>);
  href?: string;
  iconLeft?: IconNameType;
  iconRight?: IconNameType;
  iconSpace?: ButtonIconSpace;
  label: string;
  loading?: boolean;
  loadingPlacement?: "center" | "left" | "right";
  loadingText?: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
  primary?: boolean;
  ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
  size?: CssSizeType;
  type?: ButtonType;
  variant?: ButtonVariant;
  width?: ButtonWidth;
}
