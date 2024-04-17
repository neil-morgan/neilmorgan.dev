import type { CategoryItemType } from "@/service";
import { LOCATIONS } from "@/lib/site";

export const buildNavigation = (postCategories: CategoryItemType[]) => [
  LOCATIONS.skills,
  {
    ...LOCATIONS.posts,
    options: postCategories?.map(category => ({
      label: category?.title,
      slug: `${LOCATIONS.posts.slug}/${category?.slug}`,
    })),
  },
];
