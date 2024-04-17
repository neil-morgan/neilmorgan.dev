import { draftMode } from "next/headers";
import {
  IntroWrapper,
  IntroDetails,
  SellingPointsWrapper,
  SellingPoint,
} from "./styles";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { PostsDocument, HomePageDocument, ContentGroup, Post } from "@/service";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { Container, Text, Icon } from "@/components/atoms";
import {
  FeaturedSection,
  ContentPresentation,
  PageHeader,
} from "@/components/molecules";
import { DnaHologramAnimation } from "@/components/organisms";

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
  const pageData = await fetchContent({
    document: HomePageDocument,
    preview,
  });

  const [{ posts }, page] = await Promise.all([postsData, pageData]);

  const latestPost = posts?.items[0] as Post;
  const header = page.header as ContentGroup;
  const sellingPoints = page.sellingPoints?.items as ContentGroup[];
  const base64Map = await extractImagesToBase64Map(latestPost);

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
                <Icon name={item.icon} css={{ fontSize: "3rem" }} />
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
                label="Latest post"
                tags={latestPost.tagsCollection}
                cta={{
                  href: `${LOCATIONS.posts.slug}/${latestPost.category?.slug}/${latestPost.slug}`,
                  label: "Read more",
                }}
                body={latestPost.description}
              />
            </Container>
          </FeaturedSection>
        )}
    </>
  );
};

export default HomePage;
