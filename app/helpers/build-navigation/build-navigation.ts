import type { CategoryType } from "@/service";

export const buildNavigation = (postCategories: CategoryType[]) => [
  {
    title: "Skills",
    slug: "/skills",
  },
  {
    title: "Posts",
    slug: "/posts",
    options: postCategories?.map(category => ({
      title: category?.title,
      slug: `/posts/${category?.slug}`,
    })),
  },
];
