import { draftMode } from "next/headers";
import {
  IntroWrapper,
  IntroDetails,
  SellingPointsWrapper,
  SellingPoint,
  FeedbackWrapper,
  FeedbackFooter,
} from "./styles";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import {
  PostsDocument,
  HomePageDocument,
  ProjectsDocument,
  type ContentGroup,
  type Post,
  type Project,
  type IconType,
  type TagType,
} from "@/service";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { Container, Text, Icon, Link } from "@/components/atoms";
import {
  FeaturedSection,
  ContentPresentation,
  PageHeader,
  AuthorImage,
  Richtext,
} from "@/components/molecules";
import { DnaHologramAnimation } from "@/components/organisms";
import { formatDate } from "@/utils/format-date";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description: "Frontend Engineer - React.",
};

const tags = ["post"];
export const revalidate = 5;

const HomePage = async () => {
  const { isEnabled: preview } = draftMode();

  const postsData = await fetchContent({
    document: PostsDocument,
    tags,
    preview,
  });

  const projectsData = await fetchContent({
    document: ProjectsDocument,
    preview,
  });

  const pageData = await fetchContent({
    document: HomePageDocument,
    preview,
  });

  const [{ posts }, { projects }, page] = await Promise.all([
    postsData,
    projectsData,
    pageData,
  ]);

  const latestPost = posts?.items[0] as Post;
  const feedback = page.feedback;
  const latestProject = projects?.items[0] as Project;
  const header = page.header as ContentGroup;
  const sellingPoints = page.sellingPoints?.items as ContentGroup[];
  const base64Map = await extractImagesToBase64Map({
    latestPost,
    latestProject,
  });

  console.log(feedback);

  return (
    <>
      <Container>
        <IntroWrapper>
          <IntroDetails>
            {header.heading && (
              <PageHeader
                heading={header.heading}
                kicker={header.kicker}
                body={header.body}
              />
            )}
          </IntroDetails>
          <DnaHologramAnimation />
        </IntroWrapper>
      </Container>

      <Container>
        <SellingPointsWrapper>
          {sellingPoints.map((item, i) => (
            <SellingPoint key={i}>
              {item.icon && (
                <Icon name={item.icon as IconType} css={{ fontSize: "3rem" }} />
              )}
              <Text size={5} color="$secondary1" css={{ margin: "$2 0 $4" }}>
                {item.heading}
              </Text>
              <Text as="p" textAlign="center">
                {item.body}
              </Text>
            </SellingPoint>
          ))}
        </SellingPointsWrapper>
      </Container>

      {latestPost &&
        latestPost.image?.title &&
        latestPost.image.description &&
        latestPost.image.url && (
          <FeaturedSection>
            <Container>
              <ContentPresentation
                image={{
                  url: latestPost.image.url,
                  description: latestPost.image.description,
                  blurDataUrl: base64Map[latestPost.image.title],
                }}
                title={latestPost.title}
                kicker="Latest post"
                tags={latestPost.tagsCollection?.items as TagType[]}
                cta={{
                  href: `${LOCATIONS.posts.slug}/${latestPost.category?.slug}/${latestPost.slug}`,
                  label: "Read more",
                }}
                body={latestPost.description}
              />
            </Container>
          </FeaturedSection>
        )}

      <Container>
        <FeedbackWrapper>
          <AuthorImage
            url={feedback?.authorImageUrl}
            name={feedback?.author}
            size="lg"
          />
          {feedback?.comments && <Richtext content={feedback?.comments} />}
          <FeedbackFooter>
            {feedback?.url && (
              <Link href={feedback?.url} target="_blank">
                {feedback?.author} | {feedback?.authorRole}
              </Link>
            )}
            <Text size={0}>{formatDate(feedback?.date)}</Text>
          </FeedbackFooter>
        </FeedbackWrapper>
      </Container>

      {latestProject &&
        latestProject.image?.title &&
        latestProject.image.description &&
        latestProject.image.url &&
        latestProject.categories && (
          <FeaturedSection>
            <Container>
              <ContentPresentation
                reverse
                image={{
                  url: latestProject.image.url,
                  description: latestProject.image.description,
                  blurDataUrl: base64Map[latestProject.image.title],
                }}
                title={latestProject.heading}
                kicker="Latest project"
                tags={latestProject.categories.map(cat => ({
                  title: cat as string,
                }))}
                cta={{
                  href: `${LOCATIONS.projects.slug}/${latestProject.slug}`,
                  label: "Read more",
                }}
                body={latestProject.description}
              />
            </Container>
          </FeaturedSection>
        )}
    </>
  );
};

export default HomePage;
