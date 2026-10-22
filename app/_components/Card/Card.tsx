import { Box, AspectImage } from "@/app/_components";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export const Card = (props: CardProps) => {
  const image = props.image?.image;

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
      <div className={styles.body}>{props.title}</div>
    </Box>
  );
};
