import { Box, AspectImage, TagList } from "@/app/_components";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export const Card = (props: CardProps) => {
  const image = props.image?.image;
  const tags = props.contentfulMetadata?.tags;
  return (
    <Box
      borderRadius="0.25rem"
      href={props.slug ?? undefined}
      className={styles.card}
      flexDirection="row"
    >
      {image?.url && (
        <AspectImage
          borderRadius="0rem"
          size="5rem"
          fit="cover"
          loading="eager"
          url={image.url}
          sourceSize={image}
          description={image.description ?? ""}
        />
      )}
      <div className={styles.body}>
        <p>{props.title}</p>
        <TagList
          color="secondary"
          className={styles.tagList}
          list={tags ?? []}
          size="sm"
        />
      </div>
    </Box>
  );
};
