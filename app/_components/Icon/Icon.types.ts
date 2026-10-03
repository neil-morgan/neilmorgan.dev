import type { CssSizeType } from "@/app/_styles";

import { icons } from "./icons";

export type IconNameType = keyof typeof icons;

export type IconPathType = {
  name: IconNameType;
  path: string;
};

export interface IconProps {
  className?: string;
  name: IconNameType;
  size?: CssSizeType;
  style?: React.CSSProperties;
}

export interface IconStoryParams {
  sizes: CssSizeType[];
}
