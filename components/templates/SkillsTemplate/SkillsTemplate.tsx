"use client";

import { Container } from "@/components/atoms";
import type { GroupedSkillType } from "@/types";

export const SkillsTemplate = ({
  skills,
}: {
  skills: GroupedSkillType | GroupedSkillType[];
}) => {
  return (
    <Container>
      <pre>{JSON.stringify(skills, null, 2)}</pre>
    </Container>
  );
};
