import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { getClient } from "@/lib/apollo";
import { AllSkillsSlugsDocument, PostDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { getSkill } from "@/services";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: PostDocument,
    variables: {
      slug: params.slug,
    },
  });
  return { title: data?.post?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllSkillsSlugsDocument,
  });

  if (!data || !data.allSkillsSlugs || !data.allSkillsSlugs.items) {
    return [];
  }

  return data.allSkillsSlugs.items.map(skill => ({
    category: skill?.category?.slug,
    slug: skill?.slug,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();

  const data = await getSkill(params.slug, isEnabled);

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default PostPage;
