"use client";

import { Grid } from "./styles";
import { Container, Text } from "@/components/atoms";
import type { GroupedSkillType } from "@/types";

export const SkillsTemplate = ({ skills }: { skills: GroupedSkillType[] }) => {
  return (
    <Container css={{ marginTop: "$11" }}>
      <Grid>
        {skills.map(({ category, items }, i) => (
          <div key={category.title}>
            <Text size={3}>{category.title}</Text>
            {items.map(({ proficiency, items }) => (
              <>
                <Text size={2} color="secondary" key={proficiency}>
                  {proficiency}
                </Text>
                {items.map(({ title }) =>
                  title ? <div key={title}>{title}</div> : null,
                )}
              </>
            ))}
          </div>
        ))}
      </Grid>
    </Container>
  );
};
