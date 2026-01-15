import { Fragment } from "react/jsx-runtime";

import { Card, AspectImage, Icon, Link } from "@/app/_components";
import { ExperienceContentDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { formatDate } from "@/app/_utils/format-date/format-date";

import styles from "./Experience.module.css";

export const Experience = async () => {
  const { experiences } = await fetchContent({
    document: ExperienceContentDocument,
    variables: { preview: false, limit: 3 },
  });

  return (
    <section className={styles.experiences}>
      <h2>Experience</h2>
      {experiences?.items.map((experience, index) => {
        const previousExperience = experiences?.items[index - 1];
        const fromDate = experience?.date
          ? formatDate(experience.date, { format: "monthNameYear" })
          : "";
        const toDate = previousExperience?.date
          ? formatDate(previousExperience.date, {
              format: "monthNameYear",
            })
          : "Present";

        return experience?.slug ? (
          <Card
            key={index}
            className={styles.experience}
            href={experience.slug}
          >
            <div className={styles.images}>
              {experience.images?.items
                .slice()
                .reverse()
                .map((props, i) => {
                  return props?.url && props.description ? (
                    <Fragment key={i}>
                      <AspectImage
                        width={
                          i === 0 || experience?.images?.items.length === 1
                            ? "3rem"
                            : "2rem"
                        }
                        borderRadius="0.2rem"
                        fit="cover"
                        url={props?.url}
                        description={props.description}
                        shadow
                      />
                      {i < (experience.images?.items.length || 0) - 1 ? (
                        <Icon name="arrowUp" size="1.5rem" />
                      ) : null}
                    </Fragment>
                  ) : null;
                })}
            </div>
            <div className={styles.content}>
              <header>
                <h4>
                  {experience.kicker} - {experience.title}
                </h4>
                <span>
                  {fromDate} — {toDate}
                </span>
              </header>
              <p>{experience.description}</p>
            </div>
          </Card>
        ) : null;
      })}
      <Link href="/experience" className={styles["see-all"]}>
        See All
      </Link>
    </section>
  );
};
