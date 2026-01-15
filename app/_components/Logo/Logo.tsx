import { IconButton, Icon } from "@/app/_components";

import styles from "./Logo.module.css";

import type { LogoProps } from "./Logo.types";

export const Logo = ({ size = "md", isLink = false }: LogoProps) => {
  if (isLink) {
    return <IconButton icon="siteLogo" href="/" size={size} />;
  }

  return <Icon name="siteLogo" size={size} className={styles["site-logo"]} />;
};
