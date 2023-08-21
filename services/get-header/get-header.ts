import type { GetHeaderContentReturnType } from "./types";
import { getClient } from "@/lib/apollo";
import { HeaderDocument, type SocialItem } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import type { CategoryType } from "@/types";

const { CMS } = APOLLO_CLIENTS;

export const getHeader = async (): Promise<GetHeaderContentReturnType> => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: HeaderDocument,
    fetchPolicy: "no-cache",
  });

  const social = data.socialItems?.items as SocialItem[];
  const postCategories = data.postCategories?.items as CategoryType[];
  const skillCategories = data.skillCategories?.items as CategoryType[];

  return {
    social,
    navigation: [
      {
        title: "Posts",
        slug: "/posts",
        list: {
          options: postCategories.map(({ title, slug }) => ({
            title,
            slug: `/posts/${slug}`,
          })),
        },
      },
      {
        title: "Skills",
        slug: "/skills",
        list: {
          options: skillCategories.map(({ title, slug }) => ({
            title,
            slug: `/skills/${slug}`,
          })),
        },
      },
      {
        title: "Projects",
        slug: "/projects",
      },
      { title: "Feedback", slug: "/feedback" },
    ],
  };
};
