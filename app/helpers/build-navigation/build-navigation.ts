import type { CategoryItemType } from "@/service";

export const buildNavigation = (postCategories: CategoryItemType[]) => [
  {
    title: "Skills",
    slug: "/skills",
  },
  { title: "Projects", slug: "projects/" },
  // { title: "Experience", slug: "/" },
  {
    title: "Posts",
    slug: "/posts",
    options: postCategories?.map(category => ({
      title: category?.title,
      slug: `/posts/${category?.slug}`,
    })),
  },
];
