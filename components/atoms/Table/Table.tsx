"use client";

import { TableElement, TableWrapper } from "./styles";

export const Table = ({ children }: React.PropsWithChildren) => (
  <TableWrapper>
    <TableElement>
      <tbody>{children}</tbody>
    </TableElement>
  </TableWrapper>
);
