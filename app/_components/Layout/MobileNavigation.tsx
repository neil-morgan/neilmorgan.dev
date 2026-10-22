"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { combineClassNames } from "@/app/_utils";
import { IconButton, Button } from "@/app/_components";
import styles from "./MobileNavigation.module.css";
import type { MobileNavigationProps } from "./Layout.types";

const MobileNavigationContent = ({ items }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={combineClassNames(styles.container)}>
      <IconButton
        className={styles.menuButton}
        icon={isOpen ? "cross" : "menu"}
        size="xs"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={combineClassNames(styles.menu, isOpen && styles.open)}>
        <nav>
          {items.map((item, index) =>
            item.disabled ? null : (
              <Button
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                disabled={item.disabled}
                label={item.label}
                size="md"
                iconLeft={item.iconLeft}
                align="left"
                width="full"
                alignSelf="center"
              />
            ),
          )}
        </nav>
      </div>
    </div>
  );
};

export const MobileNavigation = ({ items }: MobileNavigationProps) => {
  const pathname = usePathname();

  return <MobileNavigationContent key={pathname} items={items} />;
};
