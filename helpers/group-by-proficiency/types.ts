import type { ProficiencyType } from "@/types";

export type ProficiencyConstraintType<T extends ProficiencyType> = {
  category: T;
  [key: string]: any;
};
