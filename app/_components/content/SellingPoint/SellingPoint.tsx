import { Icon } from "@/app/_components";

import styles from "./SellingPoint.module.css";

import type { SellingPointProps } from "./SellingPoint.types";

export const SellingPoint = ({
  title,
  description,
  icon,
}: SellingPointProps) => {
  return (
    <div className={styles.sellingPoint}>
      <Icon name={icon} size="3rem" />
      {/* <h3>{title}</h3> */}
      {/* <p>{description}</p> */}
    </div>
  );
};
