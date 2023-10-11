"use client";

import { Container } from "@/components/atoms";
import { SkillGrid } from "@/components/molecules";
import type { GroupedSkillType } from "@/types";

export const SkillsTemplate = ({
  skills,
}: {
  skills: GroupedSkillType | GroupedSkillType[];
}) => {
  return (
    <Container css={{ marginTop: "$11" }}>
      {Array.isArray(skills) ? (
        skills.map(({ category, items }, i) => (
          <div key={category.title}>asd</div>
        ))
      ) : (
        <div>asd</div>
      )}
    </Container>
  );
};
