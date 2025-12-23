import {
  Feedback,
  Skill,
  MasonryGrid,
  SellingPoint,
  BackgroundSlice,
  ConditionalWrapper,
} from "@/app/_components";
import { SectionContentDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";
import { combineClassNames } from "@/app/_utils";

import styles from "./Section.module.css";

import type { SectionProps } from "./Section.types";

const layoutMap = {
  masonry: (content: React.ReactNode) => (
    <MasonryGrid gutter="2rem">{content}</MasonryGrid>
  ),
  default: (content: React.ReactNode) => <>{content}</>,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<string, React.ComponentType<any>> = {
  Feedback,
  Skill,
  SellingPoint,
};

type InferredProps = React.ComponentProps<
  (typeof componentMap)[keyof typeof componentMap]
>;

const renderContent = (props: InferredProps): React.ReactElement | null => {
  const { __typename: typename, sys } = props;
  const Component = componentMap[typename];
  if (!Component) return null;
  return <Component key={sys.id} {...props} />;
};

export const SectionServer = async ({ id }: SectionProps) => {
  const { section } = await fetchContent({
    document: SectionContentDocument,
    variables: { id },
  });

  const {
    breakpoint,
    columns,
    contentCollection,
    featured,
    fullWidth,
    gap,
    layout,
    margin,
    title,
  } = section?.items[0] || {};

  const sectionStyles = {
    "--margin": `${margin}rem`,
    "--gap": `${gap}rem`,
  } as React.CSSProperties;

  const sortedContentByDate = [...(contentCollection?.items || [])].sort(
    (a, b) => {
      const dateA = (a as { date?: string }).date;
      const dateB = (b as { date?: string }).date;
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
  );

  const content = sortedContentByDate.map((props) => {
    if (!props?.__typename) return null;
    return renderContent(props as InferredProps);
  });

  const layoutKey = layout?.replace(/ +/g, "-").toLowerCase() || "default";
  const finalLayoutKey =
    layoutKey in layoutMap ? (layoutKey as keyof typeof layoutMap) : "default";

  return (
    <section
      className={combineClassNames(
        styles.container,
        styles[`columns-${columns || 1}`],
        featured && styles.featured,
        (fullWidth || featured) && styles["full-width"]
      )}
      style={sectionStyles}
    >
      {featured && <BackgroundSlice />}
      <ConditionalWrapper
        condition={!!featured}
        wrapper={(children) => <div className={styles.body}>{children}</div>}
      >
        {title && <h3>{title}</h3>}
        {layoutMap[finalLayoutKey](content)}
      </ConditionalWrapper>
      {featured && <BackgroundSlice reverse />}
    </section>
  );
};
