import {
  Breadcrumbs,
  AspectImage,
  Button,
  IconNameType,
} from "@/app/_components";

import styles from "./PageHeader.module.css";

import type { PageHeaderProps } from "./PageHeader.types";

export const PageHeader = ({
  slug,
  title,
  description,
  kicker,
  images,
  links,
}: PageHeaderProps) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerContent}>
        <Breadcrumbs crumbs={slug} />
        {kicker && <h3 className={styles.kicker}>{kicker}</h3>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <div className={styles.icons}>
          {links?.items.map((props, key) =>
            props?.label ? (
              <Button
                key={key}
                {...(props.icon && { iconRight: props.icon as IconNameType })}
                label={props?.label}
                href={`${props.page?.slug}${
                  props.section?.sys.id ? `#${props.section?.sys.id}` : ""
                }`}
              />
            ) : null
          )}
        </div>
      </div>
      {/* {image?.url && (
        <AspectImage
          className={styles.headerImage}
          ratio={4 / 3}
          fit="cover"
          url={image?.url}
          description={image?.description || "Page header image"}
          width="400px"
        />
      )} */}
    </header>
  );
};
