import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Wrapper, Main } from "./styles";
import { DraftMode } from "@/components/molecules";
import { Footer, Header, Provider } from "@/components/organisms";
import { IconDefs, ConditionalWrapper } from "@/components/atoms";
import { getHeaderContent } from "@/services";

export const revalidate = 1;

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <IconDefs />
          <ConditionalWrapper
            if={isEnabled}
            wrapWith={children => <DraftMode>{children}</DraftMode>}>
            <Wrapper>
              <Header content={await getHeaderContent()} />
              <Main>{children}</Main>
              <Footer />
            </Wrapper>
          </ConditionalWrapper>
        </Provider>
      </body>
    </html>
  );
}
