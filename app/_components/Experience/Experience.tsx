import type { ExperienceFragment } from "@/app/_graphql";
import { formatDate } from "@/app/_utils";
import { Box, AspectImage, Icon, TagList } from "@/app/_components";
import styles from "./Experience.module.css";

export const Experience = ({
  agency,
  date,
  description,
  image,
  kicker,
  skills,
  title,
}: ExperienceFragment) => (
  <Box className={styles.experience}>
    <div className={styles.images}>
      {image?.url && (
        <AspectImage
          description={image.description || "Experience Image"}
          size="2.66rem"
          borderRadius="0.25rem"
          sizes="2.66rem"
          fit="cover"
          url={image.url}
        />
      )}
      {agency && <Icon name="arrowUp" size="1.5rem" />}
      {agency?.logo?.url && (
        <AspectImage
          size="1.66rem"
          scale="down"
          borderRadius="0.1rem"
          sizes="(max-width: 768px) 100vw, 33vw"
          url={agency.logo.url}
          description={agency.logo?.title || agency.name || "Agency Logo"}
        />
      )}
    </div>
    <div className={styles.content}>
      <header>
        <h3>{title}</h3>
        <p>{kicker}</p>
      </header>

      <p>{description}</p>
      {date && (
        <p className={styles.date}>
          &gt;
          <span>
            {formatDate(date, {
              separator: "hyphen",
            })}
          </span>
        </p>
      )}
      <TagList
        className={styles.tags}
        color="secondary"
        size="sm"
        list={
          skills?.items
            .map((skill) => skill?.name)
            .filter((name): name is string => name !== null)
            .map((name) => ({ name })) || []
        }
      />
    </div>
  </Box>
);
