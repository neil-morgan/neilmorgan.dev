import type { CategoryType, NavigationType } from "@/types";

export const buildNavigation = (posts: CategoryType[]): NavigationType => [
  {
    title: "Posts",
    slug: "/posts",
    list: {
      columns: "2",
      options: posts.map(({ title, slug }) => ({
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
];
