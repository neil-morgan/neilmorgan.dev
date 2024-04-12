import { draftMode } from "next/headers";
import { SkillsContainer, Proficiency, ProficiencyItems } from "./styles";
import { sortProficienciesByPriority } from "./helpers";
import { SkillsDocument, type Skill } from "@/service";
import {
  groupByCategory,
  fetchContent,
  extractImagesToBase64Map,
} from "@/helpers";
import { PAGE_TITLE_PREFIX, INFO_MESSAGES } from "@/lib/site";
import { InfoMessage, PageHeader, Pod } from "@/components/molecules";
import { Container, Text, Separator } from "@/components/atoms";

const tags = ["skill"];
export const revalidate = 5;

export const metadata = {
  title: `${PAGE_TITLE_PREFIX} | Skills`,
};

export default async function SkillsPage() {
  const { isEnabled: preview } = draftMode();
  const data = await fetchContent({
    document: SkillsDocument,
    tags,
    preview,
  });

  const proficiencies = groupByCategory(
    data?.skills?.items as Skill[],
    "proficiency",
  );
  const base64Map = await extractImagesToBase64Map(proficiencies);

  if (proficiencies.length === 0) {
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
  }

  return (
    <Container>
      <PageHeader
        kicker="Skills"
        title="My tech-stack and proficiencies"
        subTitle="Though I am keenly interested in back-end development, my main area of expertise is front-end."
      />
      <Separator size="xl" />
      <SkillsContainer>
        {sortProficienciesByPriority(proficiencies).map(
          ({ category, items }, i) => (
            <Proficiency key={i}>
              <Text size={4} as="h2" weight={600} print>
                {category.title} Skills
              </Text>
              <ProficiencyItems>
                {items.map(({ title, slug, icon }, i) =>
                  title && icon?.title && icon?.url && slug ? (
                    <Pod
                      key={i}
                      heading={title}
                      href={`/skills/${slug}`}
                      image={{
                        url: icon.url,
                        description: "",
                        blurDataUrl: base64Map[icon.title],
                      }}
                    />
                  ) : null,
                )}
              </ProficiencyItems>
            </Proficiency>
          ),
        )}
      </SkillsContainer>
    </Container>
  );
}
