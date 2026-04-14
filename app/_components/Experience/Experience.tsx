import { Card, AspectImage, Icon, TagList } from "@/app/_components";
import { ExperienceContentDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { formatDate } from "@/app/_utils/format-date/format-date";

import styles from "./Experience.module.css";

export const Experience = async () => {
  const { experiences } = await fetchContent({
    document: ExperienceContentDocument,
    variables: { preview: false, limit: 20 },
  });

  if (!experiences?.items || experiences.items.length === 0) return null;

  return (
    <section className={styles.experiences}>
      <h4>Experience</h4>
      {experiences?.items.map((experience, index) => {
        const previousExperience = experiences?.items[index - 1];
        const fromDate = experience?.date
          ? formatDate(experience.date, { format: "monthYear" })
          : "";
        const toDate = previousExperience?.date
          ? formatDate(previousExperience.date, {
              format: "monthYear",
            })
          : "Present";

        return experience?.slug ? (
          <Card
            key={index}
            className={styles.experience}
            href={experience.slug}
          >
            <div className={styles.images}>
              {experience.image?.url && (
                <AspectImage
                  description={
                    experience.image.description || "Experience Image"
                  }
                  size="2.66rem"
                  borderRadius="0.5rem"
                  fit="cover"
                  url={experience.image.url}
                />
              )}
              {experience.agency && <Icon name="arrowUp" size="1.5rem" />}
              {experience.agency?.logo?.url && (
                <AspectImage
                  size="2rem"
                  scale="down"
                  url={experience.agency.logo.url}
                  description={
                    experience.agency.logo?.title ||
                    experience.agency.name ||
                    "Agency Logo"
                  }
                />
              )}
            </div>
            <div className={styles.content}>
              <header>
                <div className={styles.role}>
                  <h3>{experience.title}</h3>
                  <h4>{experience.kicker}</h4>
                </div>
                <div className={styles.specifics}>
                  <span>{experience.agency ? "Contract" : "In-house"}</span>
                  <p>
                    <span>{fromDate}</span> - <span>{toDate}</span>
                  </p>
                </div>
              </header>

              <p>{experience.description}</p>
              <TagList
                className={styles.tags}
                color="secondary"
                size="sm"
                list={
                  experience.skills?.items
                    .map((skill) => skill?.title)
                    .filter((title): title is string => title !== null)
                    .map((title) => ({ title })) || []
                }
              />
            </div>
          </Card>
        ) : null;
      })}
    </section>
  );
};
