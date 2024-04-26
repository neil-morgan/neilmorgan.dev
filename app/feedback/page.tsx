import { Container, Separator, Button, Text } from "@/components/atoms";
import { PageHeader } from "@/components/molecules";
import { LOCATIONS } from "@/lib/site";

const ExperiencePage = () => {
  const breadcrumbs = [LOCATIONS.home, { label: "Experience" }];

  return (
    <>
      <Container as="section">
        <PageHeader
          breadcrumbs={breadcrumbs}
          kicker="Feedback"
          heading="The thoughts and opinions of others"
          body="Improvement begins with I"
        />
        <Separator size="xl" />
      </Container>
    </>
  );
};

export default ExperiencePage;
