export type CardProps = {
  heading: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  isLink?: boolean;
};
