import { notFound } from "next/navigation";
import { BlogListingContentDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";
import { formatDate } from "@/app/_utils";
import { Card, AspectImage, MasonryGrid } from "@/app/_components";
import styles from "./BlogListing.module.css";
import { groupPostsByCategory } from "./group-posts-by-category";

export const BlogListing = async () => {
  const { blogPosts } = await fetchContent({
    document: BlogListingContentDocument,
  });

  const groups = groupPostsByCategory(blogPosts?.items ?? []);

  if (groups.length === 0) notFound();

  return (
    <div className={styles.container}>
      <MasonryGrid gutter="2rem">
        {groups.map((group) => (
          <section key={group.slug} id={group.slug} className={styles.group}>
            <h2>{group.title}</h2>
            <ul>
              {group.posts.map((post) => (
                <li key={post.sys.id}>
                  <Card href={`/blog/${post.slug}`} className={styles.post}>
                    {post.image?.url && (
                      <AspectImage
                        size="4rem"
                        fit="cover"
                        borderRadius="0.5rem"
                        sizes="4rem"
                        url={post.image.url}
                        description={post.image.description ?? ""}
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
              ))}
            </ul>
          </section>
        ))}
      </MasonryGrid>
    </div>
  );
};
