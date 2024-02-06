import { draftMode } from "next/headers";
import { PostsDocument, type Post } from "@/graphql";
import { PostsTemplate } from "@/components/templates";
import { groupByCategory, fetchContent } from "@/helpers";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import { INFO_MESSAGES } from "@/lib/site";
import { InfoMessage } from "@/components/molecules";

const tags = ["post"];
export const revalidate = 5;

export const metadata = {
  title: `${PAGE_TITLE_PREFIX} Posts`,
};

export default async function PostsPage() {
  const data = await fetchContent({
    document: PostsDocument,
    tags,
    preview: draftMode().isEnabled,
  });

  const posts = groupByCategory(data?.posts?.items as Post[]);

  if (posts.length === 0) {
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
  }

  return <PostsTemplate posts={posts} />;
}
