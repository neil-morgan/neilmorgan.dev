import type { PropsWithChildren } from "react";
import { combineClassNames } from "@/app/_utils";
import styles from "./Page.module.css";

export const Page = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={combineClassNames(styles.container, className)}>
    {children}
  </div>
);
