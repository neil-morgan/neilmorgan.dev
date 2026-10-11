type CategorisedPost = {
  category: { title: string | null; slug: string | null } | null;
};

export type PostGroup<Post> = {
  title: string;
  slug: string;
  posts: Post[];
};

export const UNCATEGORISED_GROUP = { title: "Other", slug: "other" };

export const groupPostsByCategory = <Post extends CategorisedPost>(
  posts: (Post | null)[],
): PostGroup<Post>[] => {
  const groups = new Map<string, PostGroup<Post>>();
  let uncategorised: PostGroup<Post> | null = null;

  posts.forEach((post) => {
    if (!post) return;
    const { title, slug } = post.category ?? {};

    if (!title || !slug) {
      uncategorised ??= { ...UNCATEGORISED_GROUP, posts: [] };
      uncategorised.posts.push(post);
      return;
    }

    const group = groups.get(slug) ?? { title, slug, posts: [] };
    group.posts.push(post);
    groups.set(slug, group);
  });

  const sorted = [...groups.values()].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return uncategorised ? [...sorted, uncategorised] : sorted;
};
