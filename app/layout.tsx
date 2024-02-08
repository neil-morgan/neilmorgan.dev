import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { draftMode } from "next/headers";
import { Wrapper, Main } from "./styles";
import { inter, robotoMono } from "@/lib/site";
import { StitchesRegistryProvider, ElementRefsProvider } from "@/providers";
import { PointerGlow, ToggleDraftMode } from "@/components/molecules";
import { IconDefs } from "@/components/atoms";
import {
  SocialItemFragment,
  SocialItemsDocument,
  PostsDocument,
  type Post,
} from "@/graphql";
import { Header, Footer } from "@/components/organisms";
import { fetchContent, extractCategories } from "@/helpers";

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const { isEnabled } = draftMode();
  const socialData = fetchContent({
    document: SocialItemsDocument,
  });
  const postsData = fetchContent({
    document: PostsDocument,
    preview: isEnabled,
    variables: { preview: isEnabled },
  });
  const [posts, socialItems] = await Promise.all([postsData, socialData]);

  const social = socialItems?.socialItemCollection
    ?.items as SocialItemFragment[];
  const postCategories = extractCategories(posts.posts?.items as Post[]);

  const navigation = [
    {
      title: "Posts",
      slug: "/posts",
      list: {
        options: postCategories?.map(category => ({
          title: category?.title,
          slug: `/posts/${category?.slug}`,
        })),
      },
    },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <Analytics />
        <SpeedInsights />
        <StitchesRegistryProvider>
          <ElementRefsProvider>
            <PointerGlow />
            <IconDefs />
            {process.env.NODE_ENV === "development" && (
              <ToggleDraftMode isEnabled={isEnabled} />
            )}
            <Wrapper>
              <Header content={{ navigation, social }} />
              <Main>{children}</Main>
              <Footer content={{ navigation }} />
            </Wrapper>
          </ElementRefsProvider>
        </StitchesRegistryProvider>
      </body>
    </html>
  );
}
