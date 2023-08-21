import { type Skill } from "@/graphql";

export type GroupedByProficiencyType = {
  title: string;
  items: Skill[];
};
