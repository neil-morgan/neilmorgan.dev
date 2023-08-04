import type { CategoryType } from "@/types";

export const buildNavigation = (posts: CategoryType[]) => [
  {
    title: "Posts",
    slug: "/posts",
    list: posts.map(({ title, slug }) => ({ title, slug: `/posts/${slug}` })),
  },
  {
    title: "Skills",
    slug: "/posts",
    list: posts.map(({ title, slug }) => ({ title, slug: `/posts/${slug}` })),
  },
  {
    title: "Projects",
    slug: "/posts",
    list: posts.map(({ title, slug }) => ({ title, slug: `/posts/${slug}` })),
  },
  { title: "Feedback", slug: "/feedback" },
];
