import { draftMode } from "next/headers";
import { sortProficienciesByPriority } from "./helpers";
import { SkillsCategory } from "./components";
import { SkillsDocument, SkillsPageDocument, type Skill } from "@/service";
import {
  groupByCategory,
  fetchContent,
  extractImagesToBase64Map,
} from "@/helpers";
import { PAGE_TITLE_PREFIX, INFO_MESSAGES, LOCATIONS } from "@/lib/site";
import { InfoMessage, PageHeader } from "@/components/molecules";
import { Container, Separator } from "@/components/atoms";

const tags = ["skill"];
export const revalidate = 5;

export const metadata = {
  title: `Skills | ${PAGE_TITLE_PREFIX}`,
};

export default async function SkillsPage() {
  const { isEnabled: preview } = draftMode();
  const skillsData = await fetchContent({
    document: SkillsDocument,
    tags,
    preview,
  });
  const pageData = await fetchContent({
    document: SkillsPageDocument,
    tags,
    preview,
  });

  const [{ skills }, { header }] = await Promise.all([
    skillsData,
    pageData,
  ]);

  const proficiencies = groupByCategory(
    skills?.items as Skill[],
    "proficiency",
  );

  if (proficiencies.length === 0) {
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
  }

  const base64Map = await extractImagesToBase64Map(proficiencies);
  const breadcrumbs = [LOCATIONS.home, { label: LOCATIONS.skills.label }];

  return (
    <Container>
      {header?.heading && (
        <PageHeader
          kicker={header?.kicker}
          heading={header?.heading}
          body={header?.body}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />

      {sortProficienciesByPriority(proficiencies).map(
        ({ category, items }, i) => (
          <SkillsCategory
            key={i}
            category={category}
            items={items}
            base64Map={base64Map}
          />
        ),
      )}
    </Container>
  );
}
