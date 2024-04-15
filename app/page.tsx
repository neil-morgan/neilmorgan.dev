import { draftMode } from "next/headers";
import {
  IntroWrapper,
  IntroDetails,
  SellingPointsWrapper,
  SellingPoint,
} from "./styles";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import { PostsDocument, HomePageDocument, ContentGroup, Post } from "@/service";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { Container, Text, Icon } from "@/components/atoms";
import { FeaturedSection, ContentPresentation } from "@/components/molecules";
import { DnaHologramAnimation } from "@/components/organisms";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description:
    "Design and development is in my DNA. I love to create, build and collaborate. Explore my site and discover how can I help you.",
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
  const header = page.mainHeader as ContentGroup;
  const sellingPoints = page.sellingPoints?.items as ContentGroup[];
  const base64Map = await extractImagesToBase64Map(latestPost);

  return (
    <>
      <Container>
        <IntroWrapper>
          <IntroDetails>
            <Text size={9} as="h2" weight={600} color="$white">
              {header.heading}
            </Text>
            <Text size={2} weight={600} as="h3" print color="$primary1">
              {header.subheading}
            </Text>
            <Text>{header.body}</Text>
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
              <Text size={5} color="$primary1" css={{ margin: "$2 0 $4" }}>
                {item.heading}
              </Text>
              <Text textAlign="center">{item.body}</Text>
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
                  href: `/posts/${latestPost.category?.slug}/${latestPost.slug}`,
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
