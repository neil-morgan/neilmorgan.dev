import { notFound } from "next/navigation";

import {
  Button,
  IconButton,
  Richtext,
  RichtextLinksType,
  Footer,
  Experience,
  Projects,
  Skills,
} from "@/app/_components";
import {
  PageContentBySlugDocument,
  HomeContentDocument,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";

import styles from "./Home.module.css";

export const Home = async () => {
  const [pageData, homeData] = await Promise.all([
    fetchContent({
      document: PageContentBySlugDocument,
      variables: {
        limit: 3,
        slug: "/",
      },
    }),
    fetchContent({
      document: HomeContentDocument,
    }),
  ]);

  const page = pageData?.pageCollection?.items[0];
  const { uniquePages, categories } = homeData;
  if (!page) return notFound();

  return (
    <div className={styles.container}>
      <header>
        <h1>Neil Morgan</h1>
        <h2>Front End Engineer</h2>
        <p>
          I architect accessible, and innovative experiences that delight users
          and drive business success.
        </p>
        <nav>
          <Button
            href="mailto:neilmorgan.dev@gmail.com"
            label="CONTACT"
            size="xs"
            iconRight="envelope"
          />
          <Button href="/about" label="RÉSUMÉ" size="xs" iconRight="file" />
        </nav>
        <div>
          <IconButton icon="github" iconSize={0.5} size="xs" />
          <IconButton icon="linkedIn" iconSize={0.5} size="xs" />
        </div>
      </header>

      <main>
        {page.content && (
          <Richtext
            noPadding
            json={page.content.json}
            links={page.content.links as RichtextLinksType}
          />
        )}
        <div className={styles.content}>
          <Experience />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </main>
    </div>
  );
};
