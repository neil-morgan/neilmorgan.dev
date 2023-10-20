"use client";

import { Grid } from "./styles";
import { Container, Heading, Pod } from "@/components/atoms";
import type { GroupedSkillType } from "@/types";

export const SkillsTemplate = ({ skills }: { skills: GroupedSkillType[] }) => {
  return (
    <Container css={{ marginTop: "$11" }}>
      <Grid>
        {skills.map(({ category, items }, i) => (
          <div key={category.title}>
            <Heading size="h4">{category.title}</Heading>
            {items.map(({ proficiency, items }) => (
              <>
                <Heading size="h6" color="secondary" key={proficiency}>
                  {proficiency}
                </Heading>
                {items.map(({ title }) =>
                  title ? <Pod key={title} heading={title} /> : null,
                )}
              </>
            ))}
          </div>
        ))}
      </Grid>
    </Container>
  );
};
