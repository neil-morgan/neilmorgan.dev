import { draftMode } from "next/headers";
import { Actions } from "./styles";
import type { LinksProps } from "./types";
import { Container, Separator, Button, Text } from "@/components/atoms";
import { ExperiencePageDocument } from "@/service";
import { PageHeader } from "@/components/molecules";
import { LOCATIONS } from "@/lib/site";
import { fetchContent } from "@/helpers";

const ExperiencePage = async () => {
  const { isEnabled: preview } = draftMode();

  const { header } = await fetchContent({
    document: ExperiencePageDocument,
    preview,
  });

  const breadcrumbs = [LOCATIONS.home, { label: "Experience" }];
  const links: LinksProps = [
    { ...LOCATIONS.projects, icon: "Cube" },
    { ...LOCATIONS.skills, icon: "Rocket" },
    { ...LOCATIONS.roles, icon: "Person", disabled: true },
    { ...LOCATIONS.feedback, icon: "Quote" },
  ];

  return (
    <>
      <Container as="section">
        {header?.heading && (
          <PageHeader
            breadcrumbs={breadcrumbs}
            kicker={header.kicker}
            heading={header.heading}
            body={header.body}
          />
        )}
        <Separator size="xl" />
        <Actions>
          {links.map(({ label, slug, icon, disabled }) => (
            <Button
              size="lg"
              rightIcon={icon}
              key={slug}
              href={slug}
              disabled={disabled}>
              {label}
            </Button>
          ))}
        </Actions>
        <Separator size="xl" />

        <Text size={5}>Timeline of experience</Text>
        <Text size={0}>Feature coming soon...</Text>
      </Container>
    </>
  );
};

export default ExperiencePage;
