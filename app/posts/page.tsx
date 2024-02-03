import { draftMode } from "next/headers";
import { AllPostsDocument, type Post } from "@/graphql";
import { PostsTemplate } from "@/components/templates";
import { groupByCategory, fetchContent } from "@/helpers";
import { PAGE_TITLE_PREFIX } from "@/lib/site";

const tags = ["post"];

export const metadata = {
  title: `${PAGE_TITLE_PREFIX} Posts`,
};

const PostsPage = async () => {
  const data = await fetchContent({
    document: AllPostsDocument,
    tags,
    preview: draftMode().isEnabled,
  });

  return (
    <PostsTemplate posts={groupByCategory(data?.posts?.items as Post[])} />
  );
};

export const revalidate = 5;
export default PostsPage;
