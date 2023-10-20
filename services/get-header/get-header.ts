import type { GetHeaderContentReturnType } from "./types";
import { getClient } from "@/lib/apollo";
import { HeaderDocument, type SocialItem } from "@/graphql";
import { APOLLO_CLIENTS, FEATURE_FLAGS } from "@/lib/site";
import type { CategoryType } from "@/types";
import { getFeatureFlags } from "@/services/get-feature-flags";

const { CMS } = APOLLO_CLIENTS;

export const getHeader = async (): Promise<GetHeaderContentReturnType> => {
  const { feedbackContent, skillsContent, postsContent, projectsContent } =
    await getFeatureFlags();

  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: HeaderDocument,
    fetchPolicy: "no-cache",
  });

  const social = data.socialItems?.items as SocialItem[];
  const postCategories = data.postCategories?.items as CategoryType[];
  const pages = [];

  if (projectsContent && FEATURE_FLAGS.projects) {
    pages.push({
      title: "Projects",
      slug: "/projects",
    });
  }

  if (postsContent && FEATURE_FLAGS.posts) {
    pages.push({
      title: "Posts",
      slug: "/posts",
      list: {
        options: postCategories.map(({ title, slug }) => ({
          title,
          slug: `/posts/${slug}`,
        })),
      },
    });
  }

  if (feedbackContent && FEATURE_FLAGS.feedback) {
    pages.push({ title: "Feedback", slug: "/feedback" });
  }

  if (skillsContent && FEATURE_FLAGS.skills) {
    pages.push({
      title: "Skills",
      slug: "/skills",
    });
  }

  return {
    social,
    navigation: pages,
  };
};
