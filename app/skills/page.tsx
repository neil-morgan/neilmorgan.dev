import { draftMode } from "next/headers";
import { sortProficienciesByPriority } from "./helpers";
import { Proficiencies } from "./styles";
import { SkillsDocument, SkillsPageDocument, type Skill } from "@/service";
import {
  groupByCategory,
  fetchContent,
  extractImagesToBase64Map,
} from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { PageHeader, PodGroup } from "@/components/molecules";
import { Container, Separator } from "@/components/atoms";
import { NoticePage } from "@/components/templates";

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

  const [{ skills }, { header }] = await Promise.all([skillsData, pageData]);

  const proficiencies = groupByCategory(
    skills?.items as Skill[],
    "proficiency",
  );

  if (proficiencies.length === 0) {
    return <NoticePage noticeType="noContent" />;
  }

  const base64Map = await extractImagesToBase64Map(proficiencies);
  const breadcrumbs = [LOCATIONS.home, { label: LOCATIONS.skills.label }];

  return (
    <Container>
      {header?.title && (
        <PageHeader
          kicker={header?.kicker}
          title={header?.title}
          body={header?.body}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />

      <Proficiencies>
        {sortProficienciesByPriority(proficiencies).map(
          ({ category, items }, i) => (
            <PodGroup
              key={i}
              heading={`${category?.title} Skills`}
              items={items}
              base64Map={base64Map}
            />
          ),
        )}
      </Proficiencies>
    </Container>
  );
}
