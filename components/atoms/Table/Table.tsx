import type { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};
