"use client";
import type { ReactNode } from "react";

import { TableElement } from "./styles";

export const Table = ({ children }: { children: ReactNode }) => (
  <TableElement>
    <tbody>{children}</tbody>
  </TableElement>
);
