import { Card, AspectImage } from "@/app/_components";
import type { FeedbackFragment } from "@/app/_graphql";
import { formatDate, parseHtml } from "@/app/_utils";

import styles from "./Feedback.module.css";

export const Feedback = ({
  author,
  authorImage,
  authorRole,
  comments,
  date,
  url,
}: FeedbackFragment) => {
  if (!authorImage?.url || !authorImage?.description || !comments || !url) {
    // some form of logging here? Perhaps a skeleton placeholder?
    return null;
  }

  return (
    <Card href={url} className={styles.container}>
      <header>
        <AspectImage
          url={authorImage?.url}
          description={authorImage?.description}
          width={70}
          borderRadius="100%"
          ratio={1}
        />
        <div>
          <h3>{author}</h3>
          <p>{authorRole}</p>
          <span>
            {formatDate(date, {
              separator: "space",
              format: "monthYear",
            })}
          </span>
        </div>
      </header>

      <p>{parseHtml(comments)}</p>
    </Card>
  );
};
