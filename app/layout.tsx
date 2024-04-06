import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { draftMode } from "next/headers";
import { Inter, Fira_Mono } from "next/font/google";
import { Wrapper, Main } from "./styles";
import { StitchesRegistryProvider, ElementRefsProvider } from "@/providers";
import { PointerGlow, ToggleDraftMode } from "@/components/molecules";
import { IconDefs } from "@/components/atoms";
import {
  PostsDocument,
  SocialItemsDocument,
  SkillsDocument,
  type Post,
  type Skill,
  type SocialItemFragment,
} from "@/service";
import { Header, Footer } from "@/components/organisms";
import { fetchContent, extractCategories, buildNavigation } from "@/helpers";

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
  const skillsData = fetchContent({
    document: SkillsDocument,
    preview,
  });

  const [posts, social, skills] = await Promise.all([
    postsData,
    socialData,
    skillsData,
  ]);

  const socialItems = social?.socialItemCollection
    ?.items as SocialItemFragment[];

  const navigation = buildNavigation(
    extractCategories(posts.posts?.items as Post[]),
    extractCategories(skills.skills?.items as Skill[]),
  );

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
            <Wrapper>
              <Header content={{ navigation, socialItems }} />
              <Main>
                {children}
                <PointerGlow />
              </Main>
              <Footer content={{ navigation }} />
            </Wrapper>
          </ElementRefsProvider>
        </StitchesRegistryProvider>
      </body>
    </html>
  );
}
