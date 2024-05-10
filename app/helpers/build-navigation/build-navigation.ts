import type { CategoryItemType } from "@/service";
import { LOCATIONS } from "@/lib/site";

export const buildNavigation = (postCategories: CategoryItemType[]) => [
  {
    ...LOCATIONS.posts,
    options: postCategories?.map(category => ({
      label: category?.title,
      slug: `${LOCATIONS.posts.slug}/${category?.slug}`,
    })),
  },
  {
    ...LOCATIONS.experience,
    options: [
      LOCATIONS.skills,
      LOCATIONS.projects,
      // LOCATIONS.feedback,
      // LOCATIONS.roles,
    ],
  },
];
