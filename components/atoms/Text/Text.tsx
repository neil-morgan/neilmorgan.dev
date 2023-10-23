import type { TextProps } from "./types";
import { TextElement } from "./styles";

export const Text = ({ children, as = "div", size, css }: TextProps) => (
  <TextElement
    as={as}
    size={size}
    {...(as === "p" && { style: "p" })}
    {...(as === "strong" && { style: "strong" })}
    css={css}>
    {children}
  </TextElement>
);
