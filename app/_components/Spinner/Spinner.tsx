import { Icon } from "@/app/_components";
import { combineClassNames } from "@/app/_utils";

import styles from "./Spinner.module.css";

import type { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  className,
  color,
  shade,
  size = "1rem",
  style,
}: SpinnerProps) => (
  <Icon
    name="loading"
    color={color}
    shade={shade}
    size={size}
    style={{ ...style }}
    className={combineClassNames(styles.spinner, className)}
  />
);
