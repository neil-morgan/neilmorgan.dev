import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { SkillParamsType } from "./types";
import { Content, Body, Aside, Projects, Stats } from "./styles";
import { SkillDocument, type Skill, type RichtextType } from "@/service";
import { Container, Text, Separator } from "@/components/atoms";
import { PageHeader, Richtext } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";

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

  return {
    title: `${PAGE_TITLE_PREFIX} | ${skill?.title}`,
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

  return (
    <Container>
      {skill.title && skill.icon?.url && skill.icon?.title && (
        <PageHeader
          title={skill.title}
          subTitle={skill.description}
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
            <Text size={0}>Used in {0} projects</Text>
          </Stats>
          <Richtext content={skill?.body as RichtextType} />
        </Body>

        <Aside>
          <Text print size={2} weight={600}>
            Notable Projects
          </Text>

          <Projects>
            <Text size={0}>Feature coming soon...</Text>
            {/* <Card
              heading="An example project"
              href="/"
              description="Pariatur reprehenderit magna est et duis."
              image={{
                url: "https://images.ctfassets.net/96c2x2gvt3wj/5u52J4iFrUdnuADmpWDKQH/81fc9f739651aec60ed3654dce6506c7/andy-hermawan-bVBvv5xlX3g-unsplash.jpg",
                description:
                  "A cartoon rocket taking off - Image by Andy Hermawan on Unsplash.",
                blurDataUrl:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYJFsq1nUUDqLgUGIQUUt9MfH//ev/eeVMAMAbc8J+bmWxrAAAAAASUVORK5CYII=",
              }}
              tags={[
                {
                  title: "React.js",
                },
                {
                  title: "Next.js",
                },
              ]}
            /> */}
          </Projects>
        </Aside>
      </Content>
    </Container>
  );
}
