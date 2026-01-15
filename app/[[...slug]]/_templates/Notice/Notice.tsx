import styles from "./Notice.module.css";

type NoticeProps = {
  title?: string;
  message?: string;
  action?: React.ReactNode;
};

export const Notice = ({
  title = "Sorry, not found",
  message,
  action,
}: NoticeProps) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    {message && <p>{message}</p>}
  </div>
);
