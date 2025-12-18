"use client";

import { IconButton, Icon } from "@/app/_components";

import styles from "./SiteLogo.module.css";

import type { SiteLogoProps } from "./SiteLogo.types";

export const SiteLogo = ({ size = "md", isLink = false }: SiteLogoProps) => {
  if (isLink) {
    return <IconButton icon="siteLogo" href="/" size={size} />;
  }

  return <Icon name="siteLogo" size={size} className={styles["site-logo"]} />;
};
