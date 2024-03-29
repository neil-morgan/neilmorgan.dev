import { draftMode } from "next/headers";
import { HomeTemplate } from "@/components/templates";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import { PostsDocument, HomePageDocument, ContentGroup, Post } from "@/service";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
};

const tags = ["post"];
export const revalidate = 5;

const HomePage = async () => {
  const { isEnabled } = draftMode();
  const postsData = await fetchContent({
    document: PostsDocument,
    tags,
    preview: isEnabled,
    variables: { preview: isEnabled },
  });
  const pageData = await fetchContent({
    document: HomePageDocument,
    preview: isEnabled,
    variables: { preview: isEnabled },
  });

  const [{ posts }, page] = await Promise.all([postsData, pageData]);

  const latestPost = posts?.items[0] as Post;
  const header = page.mainHeader as ContentGroup;
  const sellingPoints = page.sellingPoints?.items as ContentGroup[];
  const base64Map = await extractImagesToBase64Map(latestPost);

  return (
    <>
      <HomeTemplate
        latestPost={latestPost}
        header={header}
        sellingPoints={sellingPoints}
        base64Map={base64Map}
      />
    </>
  );
};

export default HomePage;
