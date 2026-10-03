import { combineClassNames } from "@/app/_utils";
import { Icon } from "@/app/_components";
import styles from "./Spinner.module.css";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = ({ className, size = "1rem", style }: SpinnerProps) => (
  <Icon
    name="loading"
    size={size}
    style={{ ...style }}
    className={combineClassNames(styles.spinner, className)}
  />
);
