import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { type ReactNode } from "react";
import { Wrapper, Main } from "./styles";
import { getClient } from "@/lib/apollo";
import { DraftMode } from "@/components/molecules";
import { Footer, Header, Provider } from "@/components/organisms";
import { IconDefs, ConditionalWrapper } from "@/components/atoms";
import { GetLayoutDocument, type SocialItem } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import type { CategoryType } from "@/types";
import { buildNavigation } from "@/helpers";

export const revalidate = 1;

const inter = Inter({ subsets: ["latin"] });
const { CMS } = APOLLO_CLIENTS;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isEnabled } = draftMode();

  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: GetLayoutDocument,
    fetchPolicy: "no-cache",
  });

  const social = data.socialItemCollection?.items as SocialItem[];
  const navigation = buildNavigation(
    data.postCategoryCollection?.items as CategoryType[], // TODO: Should use type from graphql
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <IconDefs />
          <ConditionalWrapper
            if={isEnabled}
            wrapWith={children => <DraftMode>{children}</DraftMode>}>
            <Wrapper>
              <Header navigation={navigation} social={social} />
              <Main>{children}</Main>
              <Footer />
            </Wrapper>
          </ConditionalWrapper>
        </Provider>
      </body>
    </html>
  );
}
