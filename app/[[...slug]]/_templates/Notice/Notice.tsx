import { Button } from "@/app/_components";

import styles from "./Notice.module.css";

import type { NoticeProps } from "./Notice.types";

export const Notice = ({
  title = "Sorry, not found",
  message,
  action,
}: NoticeProps) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    {message && <p>{message}</p>}
    {action && (
      <Button
        href={action.href}
        label={action.label}
        size="sm"
        iconLeft={action.iconLeft}
        iconRight={action.iconRight}
        className={styles.action}
      />
    )}
  </div>
);
