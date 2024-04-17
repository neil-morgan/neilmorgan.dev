import type { CategoryItemType } from "@/service";
import { LOCATIONS } from "@/lib/site";

export const buildNavigation = (postCategories: CategoryItemType[]) => [
  {
    title: "Skills",
    slug: LOCATIONS.skills,
  },
  {
    title: "Posts",
    slug: LOCATIONS.posts,
    options: postCategories?.map(category => ({
      title: category?.title,
      slug: `${LOCATIONS.posts}/${category?.slug}`,
    })),
  },
];
