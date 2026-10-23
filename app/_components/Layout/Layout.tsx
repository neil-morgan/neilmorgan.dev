import { PageContentBySlugDocument } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";
import { combineClassNames } from "@/app/_utils";
import {
  Button,
  Icon,
  IconButton,
  Link,
  type IconNameType,
} from "@/app/_components";
import styles from "./Layout.module.css";
import { MobileNavigation } from "./MobileNavigation";
import type { FooterButton } from "./Layout.types";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const [blogPageData, feedbackPageData, experiencePageData] =
    await Promise.all([
      fetchContent({
        document: PageContentBySlugDocument,
        variables: { slug: "blog" },
      }),
      fetchContent({
        document: PageContentBySlugDocument,
        variables: { slug: "feedback" },
      }),
      fetchContent({
        document: PageContentBySlugDocument,
        variables: { slug: "experience" },
      }),
    ]);

  const blogPagePublished = Boolean(blogPageData.pageCollection?.items[0]);
  const feedbackPagePublished = Boolean(
    feedbackPageData.pageCollection?.items[0],
  );
  const experiencePagePublished = Boolean(
    experiencePageData.pageCollection?.items[0],
  );

  const navigationButtons: {
    label: string;
    href: string;
    iconLeft?: IconNameType;
    disabled?: boolean;
  }[] = [
    {
      label: "Feedback",
      href: "/feedback",
      iconLeft: "chat",
      disabled: !feedbackPagePublished,
    },
    {
      label: "Blog",
      href: "/blog",
      disabled: !blogPagePublished,
      iconLeft: "note",
    },
    {
      label: "Experience",
      href: "/experience",
      iconLeft: "briefcase",
      disabled: !experiencePagePublished,
    },
  ];

  const footerButtons: FooterButton[] = [
    {
      icon: "email",
      iconSize: 0.5,
      href: "mailto:neilmorgan.dev@gmail.com",
      size: "sm",
    },
    {
      icon: "github",
      iconSize: 0.5,
      href: "https://github.com/neil-morgan",
      size: "sm",
    },
    {
      icon: "linkedIn",
      iconSize: 0.5,
      href: "https://www.linkedin.com/in/neil-morgan-/",
      size: "sm",
    },
  ];
  return (
    <div className={styles.container}>
      <aside>
        <section>
          <Link href="/" className={styles.siteName}>
            <Icon size="lg" name="siteLogo" />
            <span>neilmorgan.dev</span>
          </Link>
        </section>
        <section className={styles.intro}>
          <p>
            I&apos;m <Link href="/">Neil</Link> — welcome to my online
            playground 🛝
          </p>
        </section>
        <section className={styles.asideButtons}>
          {navigationButtons.map((button, index) =>
            button.disabled ? null : (
              <Button
                key={index}
                href={button.href}
                disabled={button.disabled}
                label={button.label}
                size="sm"
                iconLeft={button.iconLeft}
                align="left"
              />
            ),
          )}
        </section>
        <footer>
          {footerButtons.map((button, index) => (
            <IconButton
              key={index}
              icon={button.icon}
              iconSize={button.iconSize}
              href={button.href}
              size={button.size}
            />
          ))}
        </footer>
        <MobileNavigation items={navigationButtons} />
      </aside>
      <main>
        {children}
        <footer className={combineClassNames(styles.footer)}>
          <Icon name="siteLogo" size="lg" />
          <p>© 2024 All rights reserved</p>
        </footer>
      </main>
    </div>
  );
};
