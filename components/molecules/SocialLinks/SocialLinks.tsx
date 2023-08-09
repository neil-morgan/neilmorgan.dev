import { ThemeToggle } from "../ThemeToggle";
import { SocialLinksWrapper, SocialLink } from "./styles";
import { Icon, IconButton } from "@/components/atoms";

export const SocialLinks = () => (
  <SocialLinksWrapper>
    <IconButton href="/" icon={<Icon name="github" />} priority="nav" />
    <IconButton href="/" icon={<Icon name="linkedIn" />} priority="nav" />
    <ThemeToggle />
  </SocialLinksWrapper>
);
