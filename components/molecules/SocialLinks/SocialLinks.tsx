import { ThemeToggle } from "../ThemeToggle";
import { SocialLinksWrapper, SocialLink } from "./styles";
import { Icon } from "@/components/atoms";

export const SocialLinks = () => (
  <SocialLinksWrapper>
    <SocialLink href="/">
      <Icon name="github" />
    </SocialLink>
    <SocialLink href="/">
      <Icon name="linkedIn" />
    </SocialLink>
    <ThemeToggle />
  </SocialLinksWrapper>
);
