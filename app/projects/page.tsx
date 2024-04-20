import { ProjectsWrapper } from "./styles";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { Container, Separator } from "@/components/atoms";
import { ContentPresentation, PageHeader } from "@/components/molecules";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description:
    "Design and development is in my DNA. I love to create, build and collaborate. Explore my site and discover how can I help you.",
};

export const revalidate = 5;

const ProjectsPage = async () => {
  const breadcrumbs = [
    { label: "Home", href: LOCATIONS.home },
    { label: "Projects" },
  ];

  return (
    <Container>
      <PageHeader
        kicker="Projects"
        heading="Minim Lorem duis voluptate ad."
        body="Nulla duis voluptate laborum mollit."
        breadcrumbs={breadcrumbs}
      />
      <Separator size="xl" />
      <ProjectsWrapper>
        <ContentPresentation
          title="Aute id deserunt proident ipsum."
          body="Eu ipsum eiusmod duis ad. Est excepteur consequat adipisicing minim adipisicing."
          cta={{ label: "See more", href: "" }}
          label="Project"
          tags={[
            { title: "asd", slug: "" },
            { title: "asd", slug: "" },
            { title: "asd", slug: "" },
          ]}
          image={{
            url: "https://images.ctfassets.net/96c2x2gvt3wj/5u52J4iFrUdnuADmpWDKQH/81fc9f739651aec60ed3654dce6506c7/andy-hermawan-bVBvv5xlX3g-unsplash.jpg",
            description:
              "A cartoon rocket taking off - Image by Andy Hermawan on Unsplash.",
            blurDataUrl:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYJFsq1nUUDqLgUGIQUUt9MfH//ev/eeVMAMAbc8J+bmWxrAAAAAASUVORK5CYII=",
          }}
        />

        <ContentPresentation
          title="asd"
          reverse
          body="as"
          cta={{ label: "sad", href: "" }}
          label="asd"
          image={{
            url: "https://images.ctfassets.net/96c2x2gvt3wj/5u52J4iFrUdnuADmpWDKQH/81fc9f739651aec60ed3654dce6506c7/andy-hermawan-bVBvv5xlX3g-unsplash.jpg",
            description:
              "A cartoon rocket taking off - Image by Andy Hermawan on Unsplash.",
            blurDataUrl:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYJFsq1nUUDqLgUGIQUUt9MfH//ev/eeVMAMAbc8J+bmWxrAAAAAASUVORK5CYII=",
          }}
        />
      </ProjectsWrapper>
    </Container>
  );
};

export default ProjectsPage;
