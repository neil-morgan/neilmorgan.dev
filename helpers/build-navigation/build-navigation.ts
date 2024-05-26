import { LOCATIONS } from "../../lib/site";
import type { CategoryItemType } from "@/service";

export const buildNavigation = (postCategories: CategoryItemType[]) => [
  // LOCATIONS.history,
  LOCATIONS.skills,
  LOCATIONS.projects,
  LOCATIONS.feedback,
  {
    ...LOCATIONS.posts,
    options: postCategories?.map(category => ({
      label: category?.title,
      slug: `${LOCATIONS.posts.slug}/${category?.slug}`,
    })),
  },
];
