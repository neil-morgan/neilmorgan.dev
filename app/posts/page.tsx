import { draftMode } from "next/headers";
import { PostsDocument, PostsPageDocument, type Post } from "@/service";
import {
  groupByCategory,
  fetchContent,
  extractImagesToBase64Map,
} from "@/helpers";
import { PAGE_TITLE_PREFIX, INFO_MESSAGES, LOCATIONS } from "@/lib/site";
import { InfoMessage, PageHeader, CardGroup } from "@/components/molecules";
import { Container, Separator } from "@/components/atoms";
import { NoticePage } from "@/components/templates";

const tags = ["post"];
export const revalidate = 5;

export const metadata = {
  title: `Posts | ${PAGE_TITLE_PREFIX}`,
};

export default async function PostsPage() {
  const { isEnabled: preview } = draftMode();
  const postsData = await fetchContent({
    document: PostsDocument,
    tags,
    preview,
  });
  const pageData = await fetchContent({
    document: PostsPageDocument,
    tags,
    preview,
  });

  const [{ posts }, { header }] = await Promise.all([postsData, pageData]);

  const groupedPosts = groupByCategory(posts?.items as Post[], "category");

  if (groupedPosts.length === 0) {
    return <NoticePage noticeType="noContent" />;
  }

  const base64Map = await extractImagesToBase64Map(groupedPosts);
  const breadcrumbs = [LOCATIONS.home, { label: "Posts" }];

  return (
    <Container>
      {header?.heading && (
        <PageHeader
          kicker={header.kicker}
          heading={header.heading}
          body={header.body}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />
      {groupedPosts.map(({ category, items }) =>
        category?.title ? (
          <CardGroup
            key={category.title}
            heading={category.title}
            items={items.map(post => ({
              title: post.title as string,
              description: post.description as string,
              slug: `${LOCATIONS.posts.slug}/${category?.slug}/${post.slug}`,
              image: post.image,
              tags: post.tagsCollection?.items.map(tag => ({
                title: tag?.title as string,
                slug: tag?.slug as string,
              })),
            }))}
            base64Map={base64Map}
          />
        ) : null,
      )}
    </Container>
  );
}
