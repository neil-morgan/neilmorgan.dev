import type { ListProps } from "./types";
import { ListElement } from "./styles";

export const List = ({
  children,
  format,
  css,
  gap = "$5",
}: React.PropsWithChildren<ListProps>) => (
  <ListElement
    css={{
      ...css,
      gap,
    }}
    as={format === "bullets" ? "ul" : format === "numbers" ? "ol" : "ul"}
    format={format}>
    {children}
  </ListElement>
);
