import type { CategoryType } from "@/service";

export const buildNavigation = (
  postCategories: CategoryType[],
  skillsCategories: CategoryType[],
) => [
  { title: "Home", slug: "/" },
  {
    title: "Posts",
    slug: "/posts",
    options: postCategories?.map(category => ({
      title: category?.title,
      slug: `/posts/${category?.slug}`,
    })),
  },
  {
    title: "Skills",
    slug: "/skills",
    options: skillsCategories?.map(category => ({
      title: category?.title,
      slug: `/skills/${category?.slug}`,
    })),
  },
];
