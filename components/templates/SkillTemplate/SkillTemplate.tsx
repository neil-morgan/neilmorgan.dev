import type { SkillTemplateType } from "./types";

export const SkillTemplate = ({ content }: SkillTemplateType) => {
  return <pre>{JSON.stringify(content, null, 2)}</pre>;
};
