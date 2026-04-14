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
import { PageContentBySlugDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";

import styles from "./Home.module.css";

export const Home = async () => {
  const pageData = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: "/",
    },
  });

  const page = pageData?.pageCollection?.items[0];
  if (!page) return notFound();

  return (
    <div className={styles.container}>
      <header>
        <h1>Neil Morgan</h1>
        <h2>Frontend Engineer</h2>
        <p>
          I architect accessible, and innovative experiences that delight users
          and drive business success.
        </p>
        <nav>
          <Button
            href="mailto:neilmorgan.dev@gmail.com"
            label="CONTACT"
            size="xs"
            primary
            iconRight="envelope"
          />
          <Button
            href="/feedback"
            label="MY FEEDBACK"
            size="xs"
            iconRight="quote"
          />
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
