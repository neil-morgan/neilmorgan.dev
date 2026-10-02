import type { ExperienceFragment } from "@/app/_graphql";

export type ExperienceProps = {
  experiences: {
    items: ExperienceFragment[];
  };
};
