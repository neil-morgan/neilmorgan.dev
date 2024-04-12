import type { Skill, GroupedCategoryType, ImagesMap } from "@/service";

export type SkillsCategoryType = {
  base64Map: ImagesMap;
} & GroupedCategoryType<Skill>;
