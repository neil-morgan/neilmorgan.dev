import { draftMode } from "next/headers";
import { sortProficienciesByPriority } from "./helpers";
import { SkillsCategory } from "./components";
import { SkillsDocument, type Skill } from "@/service";
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

  if (proficiencies.length === 0) {
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
  }

  const base64Map = await extractImagesToBase64Map(proficiencies);
  const breadcrumbs = [
    { label: "Home", href: LOCATIONS.home },
    { label: "Skills" },
  ];

  return (
    <Container>
      <PageHeader
        kicker="Skills"
        title="My tech-stack and proficiencies"
        subTitle="Though I am keenly interested in back-end development, my main area of expertise is front-end."
        breadcrumbs={breadcrumbs}
      />
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
