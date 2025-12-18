import styles from "./NoticePage.module.css";

type NoticePageProps = {
  title?: string;
  message?: string;
  action?: React.ReactNode;
};

export const NoticePage = ({
  title = "Sorry, not found",
  message,
  action,
}: NoticePageProps) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    {message && <p>{message}</p>}
  </div>
);
