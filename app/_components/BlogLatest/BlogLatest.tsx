import { BlogLatestContentDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";
import { formatDate } from "@/app/_utils";
import { Card, AspectImage, Tag } from "@/app/_components";
import styles from "./BlogLatest.module.css";

export const BlogLatest = async () => {
  const { blogLatest } = await fetchContent({
    document: BlogLatestContentDocument,
  });

  if (blogLatest?.items.length === 0) return null;

  const content = blogLatest?.items[0];

  return (
    <Card href={`/blog/${content?.slug}`} className={styles.container}>
      <Tag color="secondary" size="md" variant="solid" className={styles.label}>
        {content?.category?.title}
      </Tag>
      {content?.image?.url && (
        <AspectImage
          className={styles.image}
          size="100%"
          fit="cover"
          sizes="(max-width: 600px) 100vw, 50vw"
          ratio={4 / 1}
          url={content?.image?.url}
          description={content?.image?.description ?? ""}
        />
      )}
      <div className={styles.body}>
        <header>
          <h3>{content?.title}</h3>
          {content?.sys?.publishedAt && (
            <p>{formatDate(content?.sys?.publishedAt)}</p>
          )}
        </header>
        <p>{content?.description}</p>
      </div>
    </Card>
  );
};
