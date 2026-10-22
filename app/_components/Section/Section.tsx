import { SectionContentDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";
import { combineClassNames } from "@/app/_utils";
import {
  Button,
  Card,
  Experience,
  Feedback,
  MasonryGrid,
  Skill,
} from "@/app/_components";

import styles from "./Section.module.css";
import type { SectionProps } from "./Section.types";

const layoutMap = {
  masonry: (content: React.ReactNode, gap: string) => (
    <MasonryGrid gutter={gap}>{content}</MasonryGrid>
  ),
  default: (content: React.ReactNode) => <>{content}</>,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<string, React.ComponentType<any>> = {
  Feedback,
  Page: (props) => <Card {...props} />,
  Experience: (props) => <Experience {...props} />,
  Skill: (props) => <Skill {...props} />,
};

type InferredProps = React.ComponentProps<
  (typeof componentMap)[keyof typeof componentMap]
>;

const renderContent = (props: InferredProps): React.ReactElement | null => {
  const { __typename, sys } = props;
  const Component = componentMap[__typename];
  if (!Component) {
    console.warn(`No component found for typename: ${__typename}`);
    return null; // add a warning here
  }
  return <Component key={sys.id} {...props} />;
};

export const Section = async ({ id }: SectionProps) => {
  const { section } = await fetchContent({
    document: SectionContentDocument,
    variables: { id },
  });

  const {
    contentCollection,
    fullWidth,
    gap,
    layout,
    link,
    linkLabel,
    margin,
    minimumColumns,
    title,
  } = section?.items[0] || {};

  const sectionStyles = {
    "--margin": `${margin}rem`,
    "--gap": `${gap}rem`,
    "--minimum-columns": minimumColumns,
  } as React.CSSProperties;

  const sortedContentByDate = [...(contentCollection?.items || [])].sort(
    (a, b) => {
      const dateA = (a as { date?: string }).date;
      const dateB = (b as { date?: string }).date;
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    },
  );

  const content = sortedContentByDate.map((props) => {
    if (!props?.__typename) return null;
    return renderContent(props as InferredProps);
  });

  const layoutKey = layout?.replace(/ +/g, "-").toLowerCase() || "default";
  const layoutFn =
    layoutMap[layoutKey as keyof typeof layoutMap] || layoutMap.default;

  return (
    <section
      id={id}
      className={combineClassNames(
        styles.section,
        fullWidth && styles["full-width"],
      )}
      style={sectionStyles}
    >
      <div className={combineClassNames(styles.container)}>
        {title && (
          <header>
            <h3>{title}</h3>
            {linkLabel && link?.slug && (
              <Button
                label={linkLabel}
                href={link?.slug}
                size="xs"
                border
                alignSelf="flex-end"
              />
            )}
          </header>
        )}
        <div className={combineClassNames(styles.body, styles[layoutKey])}>
          {layoutFn(content, `${gap ?? 0}rem`)}
        </div>
      </div>
    </section>
  );
};
