import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { buildRichtextHeadings } from "@/helpers";
import { getPost, getPostData } from "@/services";

export const revalidate = 1;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { post } = await getPost(params.slug);
  return { title: post.title };
}

export async function generateStaticParams() {
  const { slugs } = await getPost();

  return slugs?.map(post => ({
    category: post?.category?.slug as string,
    slug: post?.slug as string,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  console.log(params);
  const { isEnabled } = draftMode();
  const { post } = await getPost(params.slug, isEnabled);
  const { likes } = await getPostData(post.sys.id);

  return (
    <PostTemplate
      content={{ ...post, likes }}
      headings={buildRichtextHeadings(post.body?.json.content)}
    />
  );
};

export default PostPage;
