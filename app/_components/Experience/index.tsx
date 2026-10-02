import {
  ExperienceContentDocument,
  ExperienceFragment,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { ExperienceClient } from "./Experience";

export const Experience = async () => {
  const { experiences } = await fetchContent({
    document: ExperienceContentDocument,
    variables: { preview: false, limit: 20 },
  });
  if (!experiences?.items || experiences.items.length === 0) return null;
  const items = experiences?.items as ExperienceFragment[];
  return <ExperienceClient items={items} />;
};
