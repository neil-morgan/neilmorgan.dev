import {
  Button,
  IconButton,
  Footer,
  Experience,
  Skills,
} from "@/app/_components";

import styles from "./page.module.css";

const Home = async () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Neil Morgan</h1>
        <h2>Frontend Engineer</h2>
        <p>
          I turn ideas, systems, and interfaces into polished digital
          experiences, bridging design and engineering to create scalable UI
          that is accessible, responsive, and maintainable. I value clean
          implementation, and intentional design.
        </p>

        <Button
          href="mailto:neilmorgan.dev@gmail.com"
          label="Let's talk"
          size="lg"
          primary
          iconRight="envelope"
        />
        <nav>
          <div>
            <Button href="/blog" label="Blog" size="sm" disabled />
            <Button href="/feedback" label="Feedback" size="sm" />
          </div>
          <div>
            <IconButton
              icon="github"
              iconSize={0.5}
              href="https://github.com/neil-morgan"
              size="xs"
            />
            <IconButton
              icon="linkedIn"
              iconSize={0.5}
              href="https://www.linkedin.com/in/neil-morgan-/"
              size="xs"
            />
          </div>
        </nav>
      </header>
      <main>
        <div className={styles.content}>
          <Experience />
          <Skills />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
