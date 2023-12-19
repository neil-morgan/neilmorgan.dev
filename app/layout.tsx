import { Wrapper, Main } from "./styles";
import { inter } from "@/lib/site";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </body>
  </html>
);

export default RootLayout;
