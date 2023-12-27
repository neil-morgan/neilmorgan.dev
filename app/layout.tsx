import { draftMode } from "next/headers";
import { Wrapper, Main } from "./styles";
import { inter } from "@/lib/site";
import {
  ApolloProvider,
  StitchesRegistryProvider,
  ThemeToggleProvider,
} from "@/providers";
import { DraftMode } from "@/components/molecules";
import { IconDefs } from "@/components/atoms";
import { getClient } from "@/lib/apollo";
import { HeaderDocument, type SocialItem } from "@/graphql";
import { Header, Footer } from "@/components/organisms";
import type { CategoryType } from "@/types";

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const { isEnabled } = draftMode();

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
            <ThemeToggleProvider>
              <IconDefs />
              {isEnabled && <DraftMode />}
              <Wrapper>
                <Header content={{ navigation, social }} />
                <Main>{children}</Main>
                <Footer />
              </Wrapper>
            </ThemeToggleProvider>
          </StitchesRegistryProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
