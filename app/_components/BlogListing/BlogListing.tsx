import { notFound } from "next/navigation";
import { BlogListingContentDocument } from "@/app/_graphql";
import { groupPostsByCategory, fetchContent } from "@/app/_helpers";
import { formatDate } from "@/app/_utils";
import { Card, AspectImage, MasonryGrid } from "@/app/_components";
import styles from "./BlogListing.module.css";

export const BlogListing = async () => {
  const { blogPosts } = await fetchContent({
    document: BlogListingContentDocument,
  });

  const groups = groupPostsByCategory(blogPosts?.items ?? []);

  if (groups.length === 0) notFound();

  return (
    <div className={styles.container}>
      <MasonryGrid gutter="2rem" heights={["8rem", "12rem", "16rem", "20rem"]}>
        {groups.map((group) => (
          <section key={group.slug} id={group.slug} className={styles.group}>
            <h2>{group.title}</h2>
            <ul>
              {group.posts.map((post) => {
                const image = post.image?.image;
                return (
                  <li key={post.sys.id}>
                    <Card href={`/blog/${post.slug}`} className={styles.post}>
                      {image?.url && (
                        <AspectImage
                          className={styles.image}
                          size="6rem"
                          fit="cover"
                          borderRadius="0px"
                          sizes="6rem"
                          url={image.url}
                          sourceSize={image}
                          focalPoint={post.image?.focalPoint}
                          description={image.description ?? ""}
                        />
                      )}
                      <div className={styles.body}>
                        <h3>{post.title}</h3>
                        {post.sys.publishedAt && (
                          <time dateTime={post.sys.publishedAt}>
                            {formatDate(post.sys.publishedAt)}
                          </time>
                        )}
                      </div>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </MasonryGrid>
    </div>
  );
};
