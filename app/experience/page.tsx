import { Actions } from "./styles";
import type { LinksProps } from "./types";
import { Container, Separator, Button, Text } from "@/components/atoms";
import { PageHeader } from "@/components/molecules";
import { LOCATIONS } from "@/lib/site";

const ExperiencePage = () => {
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
        <PageHeader
          breadcrumbs={breadcrumbs}
          kicker="Experience"
          heading="My experience as a developer"
          body="Life can only be understood backwards; but it must be lived forwards"
        />
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
