import type { PropsWithChildren } from "react";
import type { CssSizeValueType } from "@/app/_styles";

export type BoxProps = PropsWithChildren<{
  href?: string;
  className?: string;
  noHighlight?: boolean;
  ref?: React.Ref<HTMLDivElement | HTMLAnchorElement>;
  paddingTop?: CssSizeValueType;
  paddingBottom?: CssSizeValueType;
  paddingLeft?: CssSizeValueType;
  paddingRight?: CssSizeValueType;
  borderTopLeftRadius?: CssSizeValueType;
  borderTopRightRadius?: CssSizeValueType;
  borderBottomLeftRadius?: CssSizeValueType;
  borderBottomRightRadius?: CssSizeValueType;
  padding?: CssSizeValueType;
  borderRadius?: CssSizeValueType;
  flexDirection?: "row" | "column";
}>;
