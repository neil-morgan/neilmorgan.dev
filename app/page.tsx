import { draftMode } from "next/headers";
import { HomeTemplate } from "@/components/templates";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import { PostsDocument, type Post } from "@/graphql";
import { fetchContent } from "@/helpers";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
};

const tags = ["post"];
export const revalidate = 5;

const HomePage = async () => {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostsDocument,
    tags,
    preview: isEnabled,
    variables: { preview: isEnabled },
  });

  const latestPost = data?.posts?.items[0] as Post;

  return <HomeTemplate latestPost={latestPost} />;
};

export default HomePage;
