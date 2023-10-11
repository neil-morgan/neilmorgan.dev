import type {
  ProficiencyConstraintType,
  GroupedByProficiencyType,
} from "@/types";

export const groupByProficiency = <T extends ProficiencyConstraintType<any>>(
  items: T[],
): GroupedByProficiencyType<T>[] => {
  const proficiencyMap = new Map<string, T[]>();

  for (const item of items) {
    if (!item.proficiency) continue;
    const proficiency = item.proficiency;
    if (!proficiencyMap.has(proficiency)) {
      proficiencyMap.set(proficiency, []);
    }
    proficiencyMap.get(proficiency)?.push(item);
  }

  return Array.from(proficiencyMap, ([title, items]) => ({
    proficiency: title,
    items,
  }));
};
