import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { draftMode } from "next/headers";
import { Inter, Fira_Mono } from "next/font/google";
import { PageWrapper, Main } from "./styles";
import { StitchesRegistryProvider, ElementRefsProvider } from "@/providers";
import { PointerGlow, ToggleDraftMode } from "@/components/molecules";
import { IconDefs } from "@/components/atoms";
import {
  PostsDocument,
  SocialItemsDocument,
  type SocialItemFragment,
} from "@/service";
import { Header, Footer } from "@/components/organisms";
import { fetchContent } from "@/helpers";
import { LOCATIONS } from "@/lib/site";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const firaMono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-fira-mono",
});

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const { isEnabled: preview } = draftMode();

  const socialData = fetchContent({
    document: SocialItemsDocument,
  });
  const postsData = fetchContent({
    document: PostsDocument,
    preview,
  });

  const [posts, social] = await Promise.all([postsData, socialData]);

  const socialItems = social?.socialItemCollection
    ?.items as SocialItemFragment[];

  const navigation = [
    // LOCATIONS.history,
    LOCATIONS.skills,
    LOCATIONS.projects,
    LOCATIONS.feedback,
    LOCATIONS.posts,
  ];

  return (
    <html lang="en" className={`${inter.variable} ${firaMono.variable}`}>
      <body>
        <Analytics />
        <SpeedInsights />
        <StitchesRegistryProvider>
          <ElementRefsProvider>
            <IconDefs />
            {process.env.NODE_ENV === "development" && (
              <ToggleDraftMode isEnabled={preview} />
            )}
            <PageWrapper>
              <Header content={{ navigation, socialItems }} />
              <Main>
                {children}
                <PointerGlow />
              </Main>

              <Footer content={{ navigation, socialItems }} />
            </PageWrapper>
          </ElementRefsProvider>
        </StitchesRegistryProvider>
      </body>
    </html>
  );
}
