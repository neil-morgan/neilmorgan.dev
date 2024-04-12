import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { SkillParamsType } from "./types";
import { Content, Body, Aside } from "./styles";
import { SkillDocument, type Skill, type RichtextType } from "@/service";
import { Container, Text } from "@/components/atoms";
import { PageHeader, Richtext, Card } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";

const tags = ["skill"];
export const revalidate = 5;

export async function generateStaticParams() {
  const data = await fetchContent({
    document: SkillDocument,
    tags,
  });
  const { items } = data?.skill || {};
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
  const title = skill?.title;
  // const description = skill?.description;
  return { title: "Skill" };
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
  const base64Map = await extractImagesToBase64Map(skill);

  if (!skill) {
    return notFound();
  }

  return (
    <Container>
      {skill.title && (
        <PageHeader
          title={skill.title}
          subTitle="Anim cillum nisi tempor officia pariatur elit."
        />
      )}
      <Content>
        <Body>
          <Richtext content={skill?.body as RichtextType} />
        </Body>
        <Aside>
          <Text print size={2} weight={600}>
            Related Projects
          </Text>
          <Card
            heading="An example project"
            href=""
            description="Pariatur reprehenderit magna est et duis."
            tags={[
              {
                title: "React.js",
              },
              {
                title: "Next.js",
              },
            ]}
          />
        </Aside>
      </Content>
    </Container>
  );
}
