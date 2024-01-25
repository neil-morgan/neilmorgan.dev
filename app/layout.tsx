import { Wrapper, Main } from "./styles";
import { inter } from "@/lib/site";
import {
  ApolloProvider,
  StitchesRegistryProvider,
  ElementRefsProvider,
} from "@/providers";
import { PointerGlow } from "@/components/molecules";
import { IconDefs } from "@/components/atoms";
import { getClient } from "@/lib/apollo";
import { HeaderDocument, type SocialItem } from "@/graphql";
import { Header, Footer } from "@/components/organisms";
import type { CategoryType } from "@/types";

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const { data } = await getClient().query({
    query: HeaderDocument,
  });

  const social = data.socialItems?.items as SocialItem[];
  const postCategories = data.postCategories?.items as CategoryType[];

  const navigation = [
    {
      title: "Posts",
      slug: "/posts",
      list: {
        options: postCategories.map(({ title, slug }) => ({
          title,
          slug: `/posts/${slug}`,
        })),
      },
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>
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
        </ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
