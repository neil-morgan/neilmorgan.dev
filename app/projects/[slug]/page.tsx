import { redirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { getClient } from "@/lib/apollo";
import { ProjectDocument, ProjectSlugsDocument } from "@/graphql";
import { getFeatureFlags } from "@/helpers";

export const revalidate = 1;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { data } = await getClient().query({
    query: ProjectDocument,
    variables: { slug: params.slug },
  });
  return { title: data?.project?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: ProjectSlugsDocument,
  });

  const { items } = data?.projectSlugs || {};

  if (!items) {
    return [];
  }

  return items?.map(project => ({
    slug: project?.slug,
  }));
}

const ProjectPage = async ({ params }: SlugProps) => {
  const { projectsContent } = await getFeatureFlags();

  if (!projectsContent) {
    redirect("/");
  }

  const { isEnabled } = draftMode();

  const { data } = await getClient().query({
    context: { isPreviewMode: isEnabled },
    query: ProjectDocument,
    variables: { slug: params.slug, preview: isEnabled },
  });

  return <pre>{JSON.stringify(data?.project?.items[0], null, 2)}</pre>;
};

export default ProjectPage;
