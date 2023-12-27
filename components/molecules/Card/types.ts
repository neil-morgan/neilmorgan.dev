export type CardProps = {
  heading: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  cta: { href: string; label?: string };
  isLink?: boolean;
};
