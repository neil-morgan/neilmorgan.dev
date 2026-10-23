import { SkillFragment } from "@/app/_graphql";
import { AspectImage } from "@/app/_components";
import styles from "./Skill.module.css";

export const Skill = ({ icon, name }: SkillFragment) => {
  if (!icon?.url) return null;
  return (
    <div className={styles.skill}>
      <AspectImage
        size="2.5rem"
        borderRadius="0.5rem"
        fit="contain"
        url={icon?.url}
        description={icon?.description || "Skill icon"}
        shadow
      />
      <span>{name}</span>
    </div>
  );
};
