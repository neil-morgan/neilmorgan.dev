import { draftMode } from "next/headers";
import { Wrapper, Main } from "./styles";
import { DraftMode } from "@/components/molecules";
import { Footer, Header, Provider } from "@/components/organisms";
import { IconDefs } from "@/components/atoms";
import { getFeatureFlags } from "@/helpers";
import { inter, FEATURE_FLAGS } from "@/lib/site";
import { getClient } from "@/lib/apollo";
import { HeaderDocument, type SocialItem } from "@/graphql";
import type { CategoryType } from "@/types";

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const { feedbackContent, skillsContent, postsContent, projectsContent } =
    await getFeatureFlags();
  const { isEnabled } = draftMode();

  const { data } = await getClient().query({
    query: HeaderDocument,
  });

  const social = data.socialItems?.items as SocialItem[];
  const postCategories = data.postCategories?.items as CategoryType[];
  const navigation = [];

  if (projectsContent && FEATURE_FLAGS.projects) {
    navigation.push({
      title: "Projects",
      slug: "/projects",
    });
  }

  if (postsContent && FEATURE_FLAGS.posts) {
    navigation.push({
      title: "Posts",
      slug: "/posts",
      list: {
        options: postCategories.map(({ title, slug }) => ({
          title,
          slug: `/posts/${slug}`,
        })),
      },
    });
  }

  if (feedbackContent && FEATURE_FLAGS.feedback) {
    navigation.push({ title: "Feedback", slug: "/feedback" });
  }

  if (skillsContent && FEATURE_FLAGS.skills) {
    navigation.push({
      title: "Skills",
      slug: "/skills",
    });
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <IconDefs />
          {isEnabled && <DraftMode />}
          <Wrapper>
            <Header content={{ navigation, social }} />
            <Main>{children}</Main>
            <Footer />
          </Wrapper>
        </Provider>
      </body>
    </html>
  );
}
