import { draftMode } from "next/headers";
import { PostsCategory } from "./components";
import { PostsDocument, type Post } from "@/service";
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
  title: `${PAGE_TITLE_PREFIX} | Posts`,
};

export default async function PostsPage() {
  const { isEnabled: preview } = draftMode();
  const data = await fetchContent({
    document: PostsDocument,
    tags,
    preview,
  });

  const posts = groupByCategory(data?.posts?.items as Post[], "category");

  if (posts.length === 0) {
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
  }

  const base64Map = await extractImagesToBase64Map(posts);
  const breadcrumbs = [
    { label: "Home", href: LOCATIONS.home },
    { label: "Posts" },
  ];

  return (
    <Container>
      <PageHeader
        kicker="Posts"
        title="My thoughts and opinions"
        subTitle="I relentlessly dream and obsess. Here is somewhere I can let it all out."
        breadcrumbs={breadcrumbs}
      />
      <Separator size="xl" />
      {posts.map(({ category, items }, i) => (
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
