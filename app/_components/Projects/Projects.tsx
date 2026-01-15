import { Card } from "@/app/_components";
import { ProjectsContentDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";

import styles from "./Projects.module.css";

export const Projects = async () => {
  const { projects } = await fetchContent({
    document: ProjectsContentDocument,
  });
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles["link-group-grid"]}>
        {projects?.items.map((project, index) =>
          project?.slug ? (
            <Card key={index} className={styles.project} href={project.slug}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </Card>
          ) : null
        )}
      </div>
    </section>
  );
};
