import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { getClient } from "@/lib/apollo";
import { AllProjectsSlugsDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { getProject } from "@/services";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: SlugMetaProps) {
  const data = await getProject(params.slug);
  return { title: data.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllProjectsSlugsDocument,
  });

  if (!data || !data.allProjectsSlugs || !data.allProjectsSlugs.items) {
    return [];
  }

  return data.allProjectsSlugs.items.map(skill => ({
    slug: skill?.slug,
  }));
}

const ProjectPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();

  const data = await getProject(params.slug, isEnabled);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ProjectPage;
