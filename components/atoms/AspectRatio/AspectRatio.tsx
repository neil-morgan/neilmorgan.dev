import { AspectRatioElement } from "./styles";
import type { AspectRatioProps } from "./types";

export const AspectRatio = ({
  children,
  ratio = 16 / 9,
  css,
  rounded,
}: AspectRatioProps) => (
  <AspectRatioElement
    rounded={rounded}
    css={{
      ...css,
      "&:after": {
        content: "''",
        display: "block",
        paddingTop: `${(1 / ratio) * 100}%`,
      },
    }}>
    {children}
  </AspectRatioElement>
);
