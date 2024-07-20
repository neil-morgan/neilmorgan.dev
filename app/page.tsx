import { draftMode } from "next/headers";
import {
  IntroWrapper,
  IntroDetails,
  SellingPointsWrapper,
  SellingPoint,
  FeedbackWrapper,
  FeedbackFooter,
  Proficiencies,
} from "./styles";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import {
  PostsDocument,
  HomePageDocument,
  ProjectsDocument,
  SkillsDocument,
  type ContentGroup,
  type Post,
  type Project,
  type IconType,
  type TagType,
  type Skill,
} from "@/service";
import {
  fetchContent,
  extractImagesToBase64Map,
  groupByCategory,
  sortProficienciesByPriority,
} from "@/helpers";
import { Container, Text, Icon, Link } from "@/components/atoms";
import {
  FeaturedSection,
  ContentPresentation,
  PageHeader,
  AuthorImage,
  PodGroup,
  Richtext,
} from "@/components/molecules";
import { DnaHologramAnimation } from "@/components/organisms";
import { formatDate } from "@/utils";

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

  const skillsData = await fetchContent({
    document: SkillsDocument,
    tags,
    preview,
  });

  const [{ posts }, { projects }, { skills }, page] = await Promise.all([
    postsData,
    projectsData,
    skillsData,
    pageData,
  ]);

  const latestPost = posts?.items[0] as Post;
  const feedback = page.feedback;
  const latestProject = projects?.items[0] as Project;
  const header = page.header as ContentGroup;
  const sellingPoints = page.sellingPoints?.items as ContentGroup[];
  const proficiencies = groupByCategory(
    skills?.items as Skill[],
    "proficiency",
  );
  const base64Map = await extractImagesToBase64Map({
    latestPost,
    latestProject,
  });

  return (
    <>
      <Container>
        <IntroWrapper>
          <IntroDetails>
            {header.title && (
              <PageHeader
                title={header.title}
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
                {item.title}
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
                {...(latestPost.sys.publishedAt && {
                  date: formatDate(latestPost.sys.publishedAt),
                })}
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
                date={formatDate(latestProject.date)}
                title={latestProject.title}
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
            <Text size={0}>
              {formatDate(feedback?.date, {
                separator: "space",
                format: "monthYear",
              })}
            </Text>
          </FeedbackFooter>
        </FeedbackWrapper>
      </Container>
    </>
  );
};

export default HomePage;
