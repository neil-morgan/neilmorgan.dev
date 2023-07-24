import type { TextProps } from "./types";
import { TextElement } from "./styles";

export const Text = ({ children, as = "div", size, css }: TextProps) => (
  <TextElement
    as={as}
    size={size}
    {...(as === "p" && { style: "p" })}
    css={css}>
    {children}
  </TextElement>
);
