import { draftMode } from "next/headers";
import { PostsCategory } from "./components";
import { PostsDocument, PostsPageDocument, type Post } from "@/service";
import {
  groupByCategory,
  fetchContent,
  extractImagesToBase64Map,
} from "@/helpers";
import { PAGE_TITLE_PREFIX, INFO_MESSAGES, LOCATIONS } from "@/lib/site";
import { InfoMessage, PageHeader } from "@/components/molecules";
import { Container, Separator } from "@/components/atoms";

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
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
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
      {groupedPosts.map(({ category, items }, i) => (
        <PostsCategory
          key={category?.title}
          category={category}
          items={items}
          base64Map={base64Map}
        />
      ))}
    </Container>
  );
}
