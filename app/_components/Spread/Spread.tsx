import { Button, AspectImage } from "@/app/_components";

import styles from "./Spread.module.css";

import type { ContentPresentationProps } from "./Spread.types";

export const Spread = ({
  title,
  date,
  description,
  slug,
  image,
}: ContentPresentationProps) => {
  return (
    <div className={styles.spread}>
      {image?.url && image?.description && (
        <AspectImage
          url={image.url}
          fit="cover"
          ratio={21 / 13}
          description={image.description}
          blurDataUrl={image.blurDataUrl}
        />
      )}
      <div className={styles.details}>
        {date && <p className={styles.date}>{date}</p>}
        <h2>{title}</h2>
        <p>{description}</p>
        {/* {tags && tags.length > 0 && (
        <TagList list={tags} css={{ marginTop: "$5" }} />
      )} */}

        {slug && (
          <Button
            href={slug}
            label="Read"
            iconRight="arrowRight"
            className={styles.button}
          />
        )}
      </div>
    </div>
  );
};
