"use client";

import { TableElement } from "./styles";

export const Table = ({ children }: React.PropsWithChildren) => (
  <TableElement>
    <tbody>{children}</tbody>
  </TableElement>
);
