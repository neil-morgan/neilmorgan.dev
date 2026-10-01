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
          I architect accessible, and innovative experiences that delight users
          and drive business success.
        </p>
        <nav>
          <Button
            href="mailto:neilmorgan.dev@gmail.com"
            label="Contact"
            size="xs"
            primary
            iconRight="envelope"
          />
          <Button
            href="/feedback"
            label="My Feedback"
            size="xs"
            iconRight="quote"
          />
        </nav>
        <div>
          <IconButton icon="github" iconSize={0.5} href="https://github.com/neil-morgan" size="xs" />
          <IconButton icon="linkedIn" iconSize={0.5} href="https://www.linkedin.com/in/neil-morgan-/" size="xs" />
        </div>
      </header>

      <main>
        <p>
          As a Frontend Engineer with a background in design, I care as much
          about how a product feels as how it is built. I enjoy turning ideas,
          systems, and interfaces into polished digital experiences that are
          accessible, responsive, and maintainable. My reputation as a
          passionate advocate for quality, excellence, and value is visible in
          feedback received from across the industry.
        </p>
        <p>
          My work sits at the intersection of design and engineering. I am
          comfortable translating visual direction into scalable UI, thinking
          through interaction details, and building components that support both
          product quality and long-term development speed. I care about clean
          implementation, strong visual hierarchy, and creating experiences that
          feel intentional rather than just functional.
        </p>
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
