import type { CodeStringProps } from "./types";
import { CodeStringElement } from "./styles";

export const CodeString = ({ text }: CodeStringProps) => {
  return <CodeStringElement dangerouslySetInnerHTML={{ __html: text }} />;
};
