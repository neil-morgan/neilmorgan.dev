import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { SkillParamsType } from "./types";
import { Content, Body, Aside, Projects, Stats } from "./styles";
import {
  SkillDocument,
  SkillsDocument,
  type Skill,
  type RichtextType,
} from "@/service";
import { Container, Text, Separator } from "@/components/atoms";
import { PageHeader, Richtext, PodGroup, Card } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";

const tags = ["skill"];
export const revalidate = 5;

export async function generateStaticParams() {
  const data = await fetchContent({
    document: SkillsDocument,
    tags,
  });
  const { items } = data?.skills || {};
  if (!items) {
    return [];
  }
  return items?.map(item => ({
    skill: item?.slug,
  }));
}

export async function generateMetadata({ params }: SkillParamsType) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: SkillDocument,
    preview: isEnabled,
    variables: { slug: params.skill, preview: isEnabled },
  });
  const skill = data?.skill?.items[0] as Skill;

  return {
    title: `${skill?.title} | ${PAGE_TITLE_PREFIX}`,
    description: skill?.description,
  };
}

export default async function SkillPage({ params }: SkillParamsType) {
  const { isEnabled: preview } = draftMode();
  const data = await fetchContent({
    document: SkillDocument,
    preview,
    tags,
    variables: { slug: params.skill },
  });

  const skill = data.skill?.items[0] as Skill;

  if (!skill) {
    return notFound();
  }

  const base64Map = await extractImagesToBase64Map(skill);
  const breadcrumbs = [LOCATIONS.home, LOCATIONS.skills, { label: "Skill" }];

  console.log(skill?.projectsCollection?.items);

  return (
    <Container>
      {skill.title && skill.icon?.url && skill.icon?.title && (
        <PageHeader
          title={skill.title}
          body={skill.description}
          kicker="Skill"
          breadcrumbs={breadcrumbs}
          image={{
            url: skill.icon.url,
            description: skill.icon.title,
            blurDataUrl: base64Map[skill.icon.title],
          }}
        />
      )}

      <Separator size="xl" />
      <Content>
        <Body>
          <Stats>
            <Text size={0}>Used since {skill.date}</Text>
            <Text size={0}>
              Used in {skill.projectsCollection?.items.length} project
              {skill.projectsCollection?.items.length === 1 ? "" : "s"}
            </Text>
          </Stats>
          <Richtext
            content={skill?.body as RichtextType}
            base64Map={base64Map}
          />
          {skill.relatedSkillsCollection &&
            skill.relatedSkillsCollection.items.length > 0 && (
              <PodGroup
                heading="Related Skills"
                showCount={false}
                items={skill.relatedSkillsCollection.items as Skill[]}
                base64Map={base64Map}
              />
            )}
        </Body>
        {skill.projectsCollection &&
          skill.projectsCollection?.items.length > 0 && (
            <Aside>
              <Text print size={2} weight={600}>
                Recent Projects
              </Text>
              {skill?.projectsCollection?.items.length > 0 && (
                <Projects>
                  {skill?.projectsCollection?.items.map((project, i) =>
                    project?.title &&
                    project.slug &&
                    project.description &&
                    project.image?.url &&
                    project.image.description &&
                    project.image.title ? (
                      <Card
                        key={i}
                        heading={project?.title}
                        href={`/projects/${project?.slug}`}
                        description={project.description}
                        image={{
                          url: project.image.url,
                          description: project.image.description,
                          blurDataUrl: base64Map[project.image.title],
                        }}
                        tags={project.categories?.map(category => ({
                          title: category as string,
                        }))}
                      />
                    ) : null,
                  )}
                </Projects>
              )}
            </Aside>
          )}
      </Content>
    </Container>
  );
}
