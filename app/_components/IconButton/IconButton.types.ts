import type { IconNameType } from "@/app/_components";
import type { CssSizeType } from "@/app/_styles";

export type IconButtonVariant = "solid" | "bordered" | "ghost";
export type IconButtonType = "button" | "submit" | "reset";

export interface IconButtonProps {
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  icon: IconNameType;
  iconSize?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  loading?: boolean;
  onClick?: () => void;
  size?: CssSizeType;
  type?: IconButtonType;
  variant?: IconButtonVariant;
  ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
}

export interface IconButtonStoryParams {
  sizes: {
    label: string;
    size: CssSizeType;
  }[];
  variants: {
    label: string;
    variant: IconButtonVariant;
  }[];
  states: (
    | {
        label: string;
        disabled?: undefined;
        loading?: undefined;
      }
    | {
        label: string;
        disabled: boolean;
        loading?: undefined;
      }
    | {
        label: string;
        loading: boolean;
        disabled?: undefined;
      }
  )[];
}
