import { AspectImage } from "@/app/_components";
import { SkillsContentDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";

import styles from "./Skills.module.css";

export const Skills = async () => {
  const { skills } = await fetchContent({
    document: SkillsContentDocument,
  });

  const order = ["Expert", "Proficient", "Familiar"];
  const skillGroups = skills?.items
    .reduce((acc, skill) => {
      if (!skill?.proficiency) return acc;
      const existingGroup = acc.find(
        (group) => group.title === skill.proficiency
      );
      if (existingGroup) {
        existingGroup.skills.push(skill);
      } else {
        acc.push({
          title: skill.proficiency,
          skills: [skill],
        });
      }
      return acc;
    }, [] as Array<{ title: string; skills: typeof skills.items }>)
    .sort((a, b) => {
      const indexA = order.indexOf(a.title);
      const indexB = order.indexOf(b.title);
      return (
        (indexA === -1 ? Infinity : indexA) -
        (indexB === -1 ? Infinity : indexB)
      );
    });

  return (
    <section className={styles["link-group"]}>
      <h2>Skills</h2>
      <div>
        {skillGroups?.map((group, index) =>
          group ? (
            <div key={index} className={styles.skill}>
              <h4>{group.title}</h4>
              <div className={styles["skill-grid"]}>
                {group.skills.map((skill, skillIndex) =>
                  skill?.icon?.url && skill.title ? (
                    <div key={skillIndex} className={styles["skill-item"]}>
                      <AspectImage
                        width="2.5rem"
                        borderRadius="0.5rem"
                        fit="contain"
                        url={skill.icon.url}
                        description={skill.icon.description || skill.title}
                        shadow
                      />
                      <span>{skill.title}</span>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};
