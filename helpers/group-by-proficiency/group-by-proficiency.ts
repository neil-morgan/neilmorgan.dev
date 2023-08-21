import type { GroupedByProficiencyType } from "@/types";
import { type Skill } from "@/graphql";

export const groupByProficiency = (
  skills: Skill[],
): GroupedByProficiencyType[] => {
  const proficiencyMap = new Map<string, Skill[]>();

  for (const skill of skills) {
    if (!skill.proficiency) continue;
    const proficiency = skill.proficiency;
    if (!proficiencyMap.has(proficiency)) {
      proficiencyMap.set(proficiency, []);
    }
    proficiencyMap.get(proficiency)?.push(skill);
  }

  return Array.from(proficiencyMap, ([title, items]) => ({
    title,
    items,
  }));
};
