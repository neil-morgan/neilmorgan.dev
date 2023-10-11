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

export async function generateStaticParams(): Promise<
  {
    category: string | null | undefined;
    slug: string | null | undefined;
  }[]
> {
  const { slugs } = await getPost();

  const foo = slugs?.map(post => ({
    category: post?.category?.slug,
    slug: post?.slug,
  })) as {
    category: string | null | undefined;
    slug: string | null | undefined;
  }[];

  return foo;
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
