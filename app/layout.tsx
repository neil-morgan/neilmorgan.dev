import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { getClient } from "@/lib/apollo/client";
import { type ReactNode } from "react";
import { ThemeToggleProvider, StitchesRegistry } from "@/lib/stitches";
import { Header, Footer, DraftMode } from "@/components/molecules";
import { IconDefs, ConditionalWrapper } from "@/components/atoms";
import { Wrapper, Main } from "./styles";
import { PostCategoriesDocument } from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";

const inter = Inter({ subsets: ["latin"] });
const { query } = getClient();
const { CMS } = APOLLO_CLIENTS;

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isEnabled } = draftMode();

  const { data: categories } = await query({
    context: { clientName: CMS },
    query: PostCategoriesDocument,
    fetchPolicy: "cache-first",
  });

  console.log(JSON.stringify(categories, null, 2));

  return (
    <html lang="en">
      <body className={inter.className}>
        <StitchesRegistry>
          <ThemeToggleProvider>
            <IconDefs />
            <ConditionalWrapper
              if={isEnabled}
              wrapWith={children => <DraftMode>{children}</DraftMode>}>
              <Wrapper>
                <Header />
                <Main>{children}</Main>
                <Footer />
              </Wrapper>
            </ConditionalWrapper>
          </ThemeToggleProvider>
        </StitchesRegistry>
      </body>
    </html>
  );
}
