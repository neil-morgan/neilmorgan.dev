import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Wrapper, Main } from "./styles";
import { inter } from "@/lib/site";
import { StitchesRegistryProvider, ElementRefsProvider } from "@/providers";
import { PointerGlow } from "@/components/molecules";
import { IconDefs } from "@/components/atoms";
import { HeaderDocument, SocialItemFragment } from "@/graphql";
import { Header, Footer } from "@/components/organisms";
import { fetchContent } from "@/helpers";

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const data = await fetchContent({ document: HeaderDocument });
  const postCategories = data.postCategoryCollection?.items;
  const social = data.socialItemCollection?.items as SocialItemFragment[];

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
    <html lang="en" className={inter.className}>
      <body>
        <Analytics />
        <SpeedInsights />
        <StitchesRegistryProvider>
          <ElementRefsProvider>
            <PointerGlow />
            <IconDefs />
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
};

export default RootLayout;
