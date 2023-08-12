import type { GetHeaderContentReturnType } from "./types";
import { getClient } from "@/lib/apollo";
import { GetHeaderDocument, type SocialItem } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import type { CategoryType } from "@/types";

const { CMS } = APOLLO_CLIENTS;

export const getHeaderContent =
  async (): Promise<GetHeaderContentReturnType> => {
    const { data } = await getClient().query({
      context: { clientName: CMS },
      query: GetHeaderDocument,
      fetchPolicy: "no-cache",
    });

    const social = data.socialItemCollection?.items as SocialItem[];
    const postCategories = data.postCategoryCollection?.items as CategoryType[];

    return {
      social,
      navigation: [
        {
          title: "Posts",
          slug: "/posts",
          list: {
            columns: "2",
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
            columns: "1",
            options: [
              {
                icon: "cube",
                title: "Hard skills",
                slug: "/skills/hard-skills",
                description: "Aliquip sit mollit occaecat ipsum enim ad est.",
              },
              {
                icon: "heart",
                title: "Soft skills",
                slug: "/skills/hard-skills",
                description:
                  "Non sunt officia officia ipsum cupidatat exercitation eu fugiat.",
              },
            ],
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
