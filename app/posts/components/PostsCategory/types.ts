import type { Post, GroupedCategoryType, ImagesMap } from "@/service";

export type PostsCategoryType = {
  base64Map: ImagesMap;
} & GroupedCategoryType<Post>;
