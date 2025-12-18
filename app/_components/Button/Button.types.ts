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
  href?: string;
  iconLeft?: IconNameType;
  iconRight?: IconNameType;
  iconSpace?: ButtonIconSpace;
  label: string;
  loading?: boolean;
  loadingPlacement?: "center" | "left" | "right";
  loadingText?: string;
  onClick?: () => void;
  size?: CssSizeType;
  type?: ButtonType;
  variant?: ButtonVariant;
  width?: ButtonWidth;
  formAction?: string | ((formData: FormData) => void | Promise<void>);
  ref?: React.Ref<HTMLButtonElement>;
  noHighlight?: boolean;
}
