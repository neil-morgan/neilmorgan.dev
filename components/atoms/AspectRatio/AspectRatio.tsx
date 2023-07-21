import { ReactNode } from "react";
import { AspectRatioElement } from "./styles";
import type { AspectRatioProps } from "./types";

export const AspectRatio = ({
  children,
  ratio = 16 / 9,
  css,
}: AspectRatioProps) => (
  <AspectRatioElement
    css={{
      ...css,
      "&:before": {
        content: "''",
        display: "block",
        paddingTop: `${(1 / ratio) * 100}%`,
      },
    }}>
    {children}
  </AspectRatioElement>
);
