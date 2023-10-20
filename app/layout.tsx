import { draftMode } from "next/headers";
import { Wrapper, Main } from "./styles";
import { DraftMode } from "@/components/molecules";
import { Footer, Header, Provider } from "@/components/organisms";
import { IconDefs } from "@/components/atoms";
import { getHeader } from "@/services";
import { inter } from "@/lib/site";

export const revalidate = 1;

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <IconDefs />
          {isEnabled && <DraftMode />}
          <Wrapper>
            <Header content={await getHeader()} />
            <Main>{children}</Main>
            <Footer />
          </Wrapper>
        </Provider>
      </body>
    </html>
  );
}
