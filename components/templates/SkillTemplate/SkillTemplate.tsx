import type { SkillTemplateType } from "./types";
import { Container } from "@/components/atoms";

export const SkillTemplate = ({ content }: SkillTemplateType) => {
  return (
    <Container>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </Container>
  );
};
