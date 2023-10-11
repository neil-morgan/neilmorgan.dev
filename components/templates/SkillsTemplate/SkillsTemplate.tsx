"use client";

import { Container, Grid, Heading } from "@/components/atoms";
import type { GroupedSkillType } from "@/types";

export const SkillsTemplate = ({ skills }: { skills: GroupedSkillType[] }) => {
  return (
    <Container css={{ marginTop: "$11" }}>
      <Grid columns={3}>
        {skills.map(({ category, items }, i) => (
          <div key={category.title}>
            <Heading size="h4">{category.title}</Heading>
            {items.map(({ proficiency, items }, i) => {
              return (
                <>
                  <Heading size="h6" color="secondary" key={proficiency}>
                    {proficiency}
                  </Heading>
                  {items.map(({ title }) => {
                    return <div key={title}>{title}</div>;
                  })}
                </>
              );
            })}
          </div>
        ))}
      </Grid>
    </Container>
  );
};
